import { Body, Controller, Delete, Get, HttpException, Post, UseFilters, UseInterceptors } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";
import { UsersService } from "./users.service";
import { SignUpBodyDto } from "./users.dto";

@Controller("users")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get("profile")
  getUser() {
    return "current user";
  }
  @Post("profile/edit")
  editUser() {
    return "edit user";
  }
  @Post()
  async signUp(@Body() body: SignUpBodyDto) {
    return await this.usersService.signUp(body);
  }

  @Post("login")
  logIn() {
    return "login";
  }

  @Post("logout")
  logOut() {
    return "logout";
  }

  @Delete("withdrawal")
  withdrawal() {
    return "withdrawal";
  }
}
