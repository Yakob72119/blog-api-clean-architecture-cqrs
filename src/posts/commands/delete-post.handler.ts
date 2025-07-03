import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePostCommand } from './delete-post.command';
import { PrismaService } from '../../prisma/prisma.service';

@CommandHandler(DeletePostCommand)
export class DeletePostHandler implements ICommandHandler<DeletePostCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: DeletePostCommand) {
    const { id } = command;

    // Step 1: Delete all comments linked to this post
    await this.prisma.comment.deleteMany({
      where: { postId: id },
    });

    // Step 2: Delete the post itself
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
