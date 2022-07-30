import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop()
	firstName: string;

	@Prop()
	lastName: string;

	@Prop()
	nickname: string;

	@Prop()
	about: string;

	@Prop()
	avatar: string;

	@Prop()
	email: string;

	@Prop()
	phone: string;

	@Prop()
	optionalPhone: string;

	@Prop()
	location: string;

	@Prop()
	rating: number;

	@Prop()
	passHash: string;

	@Prop()
	refresh_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
