import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Comment, CommentDocument} from './schemas/comments.shema';
import {CreateCommentDto} from './dto/create-comment.dto';

@Injectable({})
export class CommentsService{
	constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
	}

	async getAllComments(): Promise<Comment[]> {
		return this.commentModel.find().exec();
	}
	async getUserComments(): Promise<Comment[]> {
		return this.commentModel.find({userNickname: 'GloMaReTest'}).exec();
	}
	async createComment(commentDto: CreateCommentDto): Promise<Comment> {
		const newComment = new this.commentModel(commentDto);
		return newComment.save();
	}
	async remove(id : string): Promise<Comment> {
		return this.commentModel.findByIdAndRemove(id);
	}
}