/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({
    example: 'newuser@example.com',
    description: 'New user email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'strongpassword123',
    minLength: 8,
    description: 'New user password (minimum 8 characters)',
  })
  @IsString()
  @MinLength(8)
  password: string;
}
