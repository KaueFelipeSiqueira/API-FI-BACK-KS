import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class QuestionarioKS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sabor: string

    @Column()
    liquido: string

    @Column()
    quantidade: number

    @Column()
    tamanho: string

    @Column()
    gelo: string

    @Column()
    acucar: string

    @Column()
    hortela: string

}
