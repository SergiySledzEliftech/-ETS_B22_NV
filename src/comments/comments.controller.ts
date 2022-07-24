import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {Comment} from './schemas/comments.shema';
import {CreateCommentDto} from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController{
	constructor(private readonly commentsService: CommentsService) {}

	@Get()
	@Header('Access-Control-Allow-Origin', '*')
	getAllComments(): Promise<Comment[]> {
		return this.commentsService.getAllComments();
	}

	@Get('/my')
	@Header('Access-Control-Allow-Origin', '*')
	getUserComments(): Promise<Comment[]> {
		return this.commentsService.getUserComments();
	}

	@Post()
	@Header('Access-Control-Allow-Origin', '*')
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	createComment(@Body() createCommentDTO: CreateCommentDto): Promise<Comment>{
		return this.commentsService.createComment(createCommentDTO);
	}

	@Delete(':id')
	@Header('Access-Control-Allow-Origin', '*')
	remove(@Param('id') id: string): Promise<Comment>{
		return this.commentsService.remove(id);
	}
}