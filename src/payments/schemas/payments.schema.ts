import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentsDocument = Payments & Document;

@Schema()
export class Payments {
	@Prop()
	cartNumber: number;

	@Prop()
	price: number;

	@Prop()
	order: String;
}

export const PaymentsSchema = SchemaFactory.createForClass(Payments);