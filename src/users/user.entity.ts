import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsString, validate } from "class-validator";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ default: true })
  @IsString()
  phoneNumber: string;

  @Column({ default: "user" })
  @IsNotEmpty()
  role: "user" | "admin";
}
