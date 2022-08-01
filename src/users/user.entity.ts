import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  name: string;

  @Column({ default: true })
  phoneNumber: string;

  @Column({ default: 'user' })
  role: 'user' | 'admin';
}
