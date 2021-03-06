import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
	@Prop() title: string;
	@Prop()	price: number;
	@Prop()	description: string;
	@Prop()	rating: number;
	@Prop()	brand: string;
	@Prop()	category: string;
	@Prop([String])	images: string[];
	@Prop()	categoryId:string;
	@Prop()	lease_term:number;
	@Prop()	lease_date:string;
	@Prop()	expires_at:string;
	@Prop(raw({
		userId: { type: String },
		firstName: { type: String },
		lastName: { type: String },
		nickname: { type: String },
		avatar: { type: String }
	}))
		// tslint:disable-next-line:no-any
	leaser_info: Record<string, any>;
	@Prop()
	status:string;
	@Prop()
	isPrivate:boolean;
	@Prop()
	condition:string;
	@Prop()
	isFree:boolean;
	@Prop()
	location:string;
	@Prop()
	date_created:string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
