import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Product } from '../../good/schemas/good.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment{
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })	userId: User;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })	productId: Product;
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