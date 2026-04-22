import { Module } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [PrismaModule, TokenModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
