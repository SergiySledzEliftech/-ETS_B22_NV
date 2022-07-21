import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestProductDocument = TestProduct & Document;

@Schema()
export class TestProduct {
	@Prop()
	name: string;

	@Prop()
	price: number;

	@Prop()
	isAvailable: boolean;
}

export const TestProductSchema = SchemaFactory.createForClass(TestProduct);