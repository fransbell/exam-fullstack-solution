import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

export default class Base extends BaseEntity {
  @CreateDateColumn()
  create_at: string

  @UpdateDateColumn()
  update_at: string
}
