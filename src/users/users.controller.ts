import { Controller, Get, HttpException, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { UsersService } from "./users.service";

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
