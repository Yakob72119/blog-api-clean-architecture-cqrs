import { CreateUserDto } from '../dto/create-user.dto';

export class RegisterUserCommand {
  constructor(public readonly dto: CreateUserDto) {}
}
