import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserKS {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    pedido: string

    @Column()
    tamanho: string

}
