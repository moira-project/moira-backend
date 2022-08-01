import { Module, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { User } from "./users/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
/*


@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
*/
