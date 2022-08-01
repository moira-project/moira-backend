import { Controller, Get, HttpException, UseFilters, UseInterceptors } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";
import { UsersService } from "./users.service";

@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUser() {
    throw new HttpException("api broken", 401);
    return "get all user api";
  }
}
