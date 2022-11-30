import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { UserKS } from "./entity/UserKS"
import { QuestionarioKS } from "./entity/QuestionarioKS"
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserKS, {
            nome: "Leo",
            pedido: "Abacaxi",
            tamanho: "G"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(QuestionarioKS, {
            sabor: "Theus",
            liquido: "Morango",
            quantidade: 2,
            tamanho: "M",
            gelo: "Nao",
            acucar: "Sim",
            hortela: "Nao"
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
