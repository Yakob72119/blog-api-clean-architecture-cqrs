import { CreateCommentDto } from '../dto/create-comment.dto';

export class AddCommentCommand {
  constructor(
    public readonly postId: string,
    public readonly userId: string,
    public readonly dto: CreateCommentDto,
  ) {}
}
