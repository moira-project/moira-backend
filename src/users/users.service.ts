import { HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { SignUpBodyDto } from "./users.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signUp(body: SignUpBodyDto) {
    //유효성 검사
    const { email, name, password } = body;
    const isExist = await this.usersRepository.findOneOrFail({ where: { email } });
    console.log(isExist);
    if (isExist) {
      throw new UnauthorizedException("이미 존재하는 이메일 입니다.", 403);
    }
    //패스워드를 암호화
    const hashedPassword = await bcrypt.hash(password, 10);
    //db에 저장
    // const cat = await this.usersRepository.create({ email, name, password: hashedPassword });
    return cat;
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
