import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {LikesService} from './likes.service';
import {Like} from './schema/likes.schema';
import {CreateLikeDto} from './dto/create-like.dto';
import {UpdateLikeDto} from './dto/update-like.dto';

@Controller('likes')
export class LikesController{
	constructor(private readonly  likesService: LikesService) {}

	@Get()
	getLike(@Query('commentId') commentId: string,
			@Query('userId') userId: string
	): Promise<Like> {
		return this.likesService.checkLike(commentId, userId);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	createLike(@Body() createLikeDto: CreateLikeDto): Promise<Like> {
		return this.likesService.createLike(createLikeDto);
	}

	@Put(':id')
	updateLike(@Body() updateLikeDto: UpdateLikeDto, @Param('id') id: string): Promise<Like> {
		return this.likesService.updateLike(id, updateLikeDto);
	}

	@Delete(':id')
	async removeLike(@Param('id') id: string): Promise<Like>{
		return this.likesService.removeLike(id);
	}
}