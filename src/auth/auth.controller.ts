import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthTokenResponseDto } from './dto/auth-token-response.dto';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Create a new account' })
  @ApiBody({ type: SignupDto })
  @ApiOkResponse({
    description: 'User registered successfully',
    type: AuthTokenResponseDto,
  })
  @ApiConflictResponse({ description: 'Email is already in use' })
  @Post('signup')
  signup(@Body() dto: SignupDto): Promise<{ accessToken: string }> {
    return this.authService.signup(dto);
  }

  @ApiOperation({ summary: 'Authenticate with email and password' })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({
    description: 'User authenticated successfully',
    type: AuthTokenResponseDto,
  })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })

  
  @Post('login')
  login(@Body() dto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(dto);
  }
}
