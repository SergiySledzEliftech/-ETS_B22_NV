import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Comment, CommentDocument} from './schemas/comments.schema';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';

@Injectable({})
export class CommentsService{
	constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
	}

	async getAllComments(goodId: string): Promise<Comment[]> {
		return this.commentModel.find({productId: goodId}).sort({date_created: -1}).exec();
	}
	async getUserComments(userId: string, goodId: string): Promise<Comment[]> {
		return this.commentModel
			.find({ userId: userId, productId: goodId })
			.sort({ date_created: -1 })
			.exec();
	}
	async createComment(commentDto: CreateCommentDto): Promise<Comment> {
		const newComment = new this.commentModel(commentDto);
		return newComment.save();
	}
	async remove(id : string): Promise<Comment> {
		return this.commentModel.findByIdAndRemove(id);
	}
	async updateComment(id: string, updateDto: UpdateCommentDto): Promise<Comment> {
		return this.commentModel.findByIdAndUpdate(id, updateDto, {new: true});
	}
}