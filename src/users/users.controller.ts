import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterUserCommand } from './commands/register-user.command';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.commandBus.execute(new RegisterUserCommand(dto));
  }
}
