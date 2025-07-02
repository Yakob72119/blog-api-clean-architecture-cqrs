import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePostCommand } from './update-post.command';
import { PrismaService } from '../../prisma/prisma.service';

@CommandHandler(UpdatePostCommand)
export class UpdatePostHandler implements ICommandHandler<UpdatePostCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: UpdatePostCommand) {
    const { id, dto } = command;

    return this.prisma.post.update({
      where: { id },
      data: dto,
    });
  }
}

