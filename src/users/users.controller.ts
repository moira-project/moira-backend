import { Body, Controller, Delete, Get, HttpException, Post, UseFilters, UseInterceptors } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";
import { UsersService } from "./users.service";
import { SignUpBodyDto } from "./users.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("users")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({ summary: "프로필 보기" })
  @Get("profile")
  getUser() {
    return "current user";
  }
  @ApiOperation({ summary: "프로필 수정" })
  @Post("profile/edit")
  editUser() {
    return "edit user";
  }

  @ApiResponse({ status: 500, description: "Server Error..." })
  @ApiOperation({ summary: "회원가입" })
  @Post()
  async signUp(@Body() body: SignUpBodyDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: "로그인" })
  @Post("login")
  logIn() {
    return "login";
  }
  @ApiOperation({ summary: "로그아웃" })
  @Post("logout")
  logOut() {
    return "logout";
  }
  @ApiOperation({ summary: "서비스 탈퇴" })
  @Delete("withdrawal")
  withdrawal() {
    return "withdrawal";
  }
}
