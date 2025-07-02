import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostsQuery } from './get-posts.query';
import { PrismaService } from '../../prisma/prisma.service';

@QueryHandler(GetPostsQuery)
export class GetPostsHandler implements IQueryHandler<GetPostsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetPostsQuery) {
    return this.prisma.post.findMany({
      include: {
        author: true,
        comments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
