import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/exceptions/http-exception.filter";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
// import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle("Moira").setDescription("Moira API description").setVersion("0.0.1").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  app.enableCors({
    origin: true, // 배포할 때는 특정 url 써주기
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  SwaggerModule.setup("api", app, document);
  await app.listen(PORT);
}
bootstrap();
