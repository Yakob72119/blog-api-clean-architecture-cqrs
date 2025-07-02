import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePostCommand } from './delete-post.command';
import { PrismaService } from '../../prisma/prisma.service';

@CommandHandler(DeletePostCommand)
export class DeletePostHandler implements ICommandHandler<DeletePostCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: DeletePostCommand) {
    return this.prisma.post.delete({
      where: { id: command.id },
    });
  }
}
