import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';
import { AddCommentHandler } from './commands/add-comment.handler';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [CommentsController],
  providers: [CommentsService, AddCommentHandler],
})
export class CommentsModule {}

