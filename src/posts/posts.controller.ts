import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { QueryBus } from '@nestjs/cqrs';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

import { CreatePostCommand } from './commands/create-post.command';
import { GetPostsQuery } from './queries/get-posts.query';
import { GetPostByIdQuery } from './queries/get-post-by-id.query';
import { UpdatePostCommand } from './commands/update-post.command';
import { DeletePostCommand } from './commands/delete-post.command';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly commandBus: CommandBus, // ✅ add this
    private readonly queryBus: QueryBus, // ✅ add this
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreatePostDto, @Request() req) {
    return this.commandBus.execute(
      new CreatePostCommand(dto.title, dto.content, req.user.userId),
    );
  }

 
  @Get()
  getAll() {
    return this.queryBus.execute(new GetPostsQuery());
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetPostByIdQuery(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.commandBus.execute(new UpdatePostCommand(id, dto));
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeletePostCommand(id));
  }
}
