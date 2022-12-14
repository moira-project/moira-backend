import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { SignUpBodyDto } from "./users.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async signUp(body: SignUpBodyDto) {
    //유효성 검사
    const { email, name, password } = body;
    const isExist = await this.usersRepository.count({ where: { email } });
    console.log(isExist);
    if (isExist) {
      throw new UnauthorizedException("이미 존재하는 이메일 입니다.", "403");
    }
    //패스워드를 암호화
    const hashedPassword = await bcrypt.hash(password, 10);
    //db에 저장
    const user = await this.usersRepository.save({ email, name, password: hashedPassword, phoneNumber: "123" });
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  async remove(email: string): Promise<void> {
    await this.usersRepository.delete(email);
  }
}
