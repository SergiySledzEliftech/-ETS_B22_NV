import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, isObjectIdOrHexString} from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment{
	// @Prop() productId: object;
	// @Prop() userId: object;
	@Prop() comment: string;
	@Prop() advantages: string;
	@Prop() disadvantages: string;
	@Prop() date_created: number;
	@Prop() userNickname: string;
	@Prop({default : 0}) like: number;
	@Prop({default : 0}) dislike: number;
	@Prop({default : 0}) rating: number;
	@Prop() avatar: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);