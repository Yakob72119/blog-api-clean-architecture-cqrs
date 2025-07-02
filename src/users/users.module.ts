import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';
import { RegisterUserHandler } from './commands/register-user.handler';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [UsersController],
  providers: [UsersService, RegisterUserHandler],
})
export class UsersModule {}
