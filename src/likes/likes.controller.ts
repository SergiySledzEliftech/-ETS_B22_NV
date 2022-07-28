import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {LikesService} from './likes.service';
import {Like} from './schema/likes.schema';
import {CreateLikeDto} from './dto/create-like.dto';
import {UpdateLikeDto} from './dto/update-like.dto';

@Controller('likes')
export class LikesController{
	constructor(private readonly  likesService: LikesService) {}

	@Get()
	@Header('Access-Control-Allow-Origin', '*')
	getLike(@Query('commentId') commentId: string,
			@Query('userId') userId: string
	): Promise<Like> {
		return this.likesService.checkLike(commentId, userId);
	}

	@Post()
	@Header('Access-Control-Allow-Origin', '*')
	@HttpCode(HttpStatus.CREATED)
	createLike(@Body() createLikeDto: CreateLikeDto): Promise<Like> {
		return this.likesService.createLike(createLikeDto);
	}

	@Put(':id')
	@Header('Access-Control-Allow-Origin', '*')
	updateLike(@Body() updateLikeDto: UpdateLikeDto, @Param('id') id: string): Promise<Like> {
		return this.likesService.updateLike(id, updateLikeDto);
	}

	@Delete(':id')
	@Header('Access-Control-Allow-Origin', '*')
	async removeLike(@Param('id') id: string): Promise<Like>{
		return this.likesService.removeLike(id);
	}
}