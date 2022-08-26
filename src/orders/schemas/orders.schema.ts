import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type OrdersDocument = Orders & Document;

@Schema()
export class Orders {
	@Prop({
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}) userId: User;

	@Prop([raw({
		term: { type: Number },
		goodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
	})]) goods: object[];
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);