import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

import Base from "./base"

@Entity("items")
export default class Items extends Base {
  @PrimaryGeneratedColumn("uuid")
  _id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  shopId: string

  @Column()
  category: string

  @Column({ nullable: false })
  price: number

  @Column({ nullable: false })
  tag: string
}
