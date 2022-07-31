import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Like, LikeDocument} from './schema/likes.schema';
import {CreateLikeDto} from './dto/create-like.dto';
import {UpdateLikeDto} from './dto/update-like.dto';

@Injectable({})
export class LikesService{
	constructor(@InjectModel(Like.name) private likeModel: Model<LikeDocument>) {}

	async checkLike(commentId: string, userId: string): Promise<Like> {
		return this.likeModel.findOne({commentId: commentId, userId: userId}).exec();
	}

	async createLike(likeDto: CreateLikeDto): Promise<Like> {
		const newLike = new this.likeModel(likeDto);
		return newLike.save();
	}
	async updateLike(id: string, likeDto: UpdateLikeDto): Promise<Like> {
		return this.likeModel.findByIdAndUpdate(id, likeDto, {new: true});
	}
	async removeLike(id: string): Promise<Like> {
		return this.likeModel.findByIdAndRemove(id);
	}
	async removeCommentLikes(commentId): Promise<Like[]> {
		return this.likeModel.remove({ commentId: commentId}).exec();
	}
}