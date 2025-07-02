import { Controller, Post, Param, UseGuards, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommandBus } from '@nestjs/cqrs';
import { AddCommentCommand } from './commands/add-comment.command';

@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addComment(
    @Param('postId') postId: string,
    @Body() dto: CreateCommentDto,
    @Request() req,
  ) {
    return this.commandBus.execute(
      new AddCommentCommand(postId, req.user.userId, dto),
    );
  }
}
