import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserKS } from "./entity/UserKS"
import { QuestionarioKS } from "./entity/QuestionarioKS"

/*
export const AppDataSource = new DataSource({
    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
*/

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "Faculdade",
    entities: [UserKS, QuestionarioKS],
    synchronize: true,
    logging:false
    
})