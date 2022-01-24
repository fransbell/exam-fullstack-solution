import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

import Base from "./base"

@Entity("shops")
export default class Shop extends Base {
  @PrimaryGeneratedColumn("uuid")
  _id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  tel: string

  @Column({ nullable: false })
  address: string
}
