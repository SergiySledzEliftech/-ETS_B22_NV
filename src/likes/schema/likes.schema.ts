import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Comment} from '../../comments/schemas/comments.schema';
import {User} from '../../users/schemas/user.schema';

export type LikeDocument = Like & Document;

@Schema()
export class Like{
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}) commentId: Comment;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'}) userId: User;
	@Prop() like: boolean;
}

export const LikesSchema = SchemaFactory.createForClass(Like);