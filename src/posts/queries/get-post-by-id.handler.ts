import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostByIdQuery } from './get-post-by-id.query';
import { PrismaService } from '../../prisma/prisma.service';

@QueryHandler(GetPostByIdQuery)
export class GetPostByIdHandler implements IQueryHandler<GetPostByIdQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetPostByIdQuery) {
    return this.prisma.post.findUnique({
      where: { id: query.postId },
      include: {
        author: true,
        comments: true,
      },
    });
  }
}
