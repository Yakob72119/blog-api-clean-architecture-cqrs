import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddCommentCommand } from './add-comment.command';
import { PrismaService } from '../../prisma/prisma.service';

@CommandHandler(AddCommentCommand)
export class AddCommentHandler implements ICommandHandler<AddCommentCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: AddCommentCommand) {
    const { postId, userId, dto } = command;

    return this.prisma.comment.create({
      data: {
        content: dto.content,
        postId,
        authorId: userId,
      },
    });
  }
}
