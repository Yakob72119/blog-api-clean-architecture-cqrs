import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CqrsModule } from '@nestjs/cqrs';

// Handlers (individually imported)
import { CreatePostHandler } from './commands/create-post.handler';
import { GetPostsHandler } from './queries/get-posts.handler';
import { GetPostByIdHandler } from './queries/get-post-by-id.handler';
import { UpdatePostHandler } from './commands/update-post.handler';
import { DeletePostHandler } from './commands/delete-post.handler';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [PostsController],
  providers: [
    PostsService,
    CreatePostHandler,
    GetPostsHandler,
    GetPostByIdHandler,
     UpdatePostHandler,
    DeletePostHandler,
  ],
})
export class PostsModule {}
