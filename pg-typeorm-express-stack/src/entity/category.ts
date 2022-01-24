import {
  BeforeInsert,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from "typeorm"

import Base from "./base"

@Entity("category")
export default class Category extends Base {
  @PrimaryGeneratedColumn("uuid")
  _id: string

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  description: string
}
