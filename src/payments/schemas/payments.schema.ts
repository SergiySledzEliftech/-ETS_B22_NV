import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentsDocument = Payments & Document;

@Schema()
export class Payments {
	@Prop()
	cardNumber: String;

	@Prop()
	cardMonth: String;

	@Prop()
	cardYear: String;

	@Prop()
	cardCvv: String;

	@Prop()
	paidAmount: number;

	@Prop()
	billNumber: String;

	@Prop()
	paidGoods: Array<any>

}

export const PaymentsSchema = SchemaFactory.createForClass(Payments);