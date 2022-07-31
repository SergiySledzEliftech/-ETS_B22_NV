import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {Comment} from './schemas/comments.schema';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController{
	constructor(private readonly commentsService: CommentsService) {}

	@Get()
	getAllComments(@Query('goodId') goodId: string): Promise<Comment[]> {
		return this.commentsService.getAllComments(goodId);
	}

	@Get('/my')
	getUserComments(
		@Query('userId') userId: string,
		@Query('goodId') goodId: string
	): Promise<Comment[]> {
		return this.commentsService.getUserComments(userId, goodId);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	createComment(@Body() createCommentDTO: CreateCommentDto): Promise<Comment>{
		return this.commentsService.createComment(createCommentDTO);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<Comment>{
		return this.commentsService.remove(id);
	}

	@Put(':id')
	updateComment(@Body() updateCommentDto: UpdateCommentDto, @Param('id') id: string): Promise<Comment> {
		return this.commentsService.updateComment(id, updateCommentDto);
	}
}