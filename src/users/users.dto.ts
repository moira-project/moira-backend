import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpBodyDto {
  @ApiProperty({
    example: "moira@gmail.com",
    description: "email",
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "1234",
    description: "password",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "jam",
    description: "name",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
/*

 @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

*/
