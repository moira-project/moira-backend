import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password!: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsString()
  phoneNumber: string;

  @Column({ default: "user" })
  @IsNotEmpty()
  role!: "user" | "admin";
}
