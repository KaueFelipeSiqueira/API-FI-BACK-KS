import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserKS } from "../entity/UserKS"
import { QuestionarioKS } from "../entity/QuestionarioKS"
import { AppDataSource } from "../data-source"

export class UserController {

    private userRepository = AppDataSource.getRepository(UserKS)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const email = request.params             
        const user = await AppDataSource.getRepository(UserKS).delete(email)             
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(UserKS).findOneBy(email) 
            response.json          (userUpdated)                                                   
        }         
    }
}

export class QuestionarioController {

    private questionarioRepository = AppDataSource.getRepository(QuestionarioKS)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.questionarioRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.questionarioRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.questionarioRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const email = request.params             
        const user = await AppDataSource.getRepository(QuestionarioKS).delete(email)             
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(QuestionarioKS).findOneBy(email) 
            response.json          (userUpdated)                                                   
        }         
    }
}