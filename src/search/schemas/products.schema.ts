import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';


export type ProductsDocument = Products & Document;

@Schema()
export class Products {
	// @Prop()
	// _id: object;
	@Prop()
	title: string;
	@Prop()
	price: number;
	@Prop()
	description: string;
	@Prop()
	rating: number;
	@Prop()
	brand: string;
	@Prop()
	category: string;
	@Prop([String])
	images: string[];
	@Prop()
	categoryId: string;
	@Prop()
	lease_term:number;
	@Prop()
	lease_date:string;
	@Prop()
	expires_at:string;
	@Prop(raw({
		userId: { type: String },
		firstName: { type: String },
		lastName: { type: String },
		nickname: { type: String },
		avatar: { type: String }
	}))
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
	// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }] })
	// category: any;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);

// export const ProductSchema = new mongoose.Schema({
// 	title: {type: String, required: true,},
// 	price: {type: Number, default: null},
// 	description: {type: String, required: true},
// 	rating: {type: Number, default: null},
// 	brand: {type: String, default: null},
// 	category: {type: String, required: true},
// 	thumbnail: {type: String, default: null},
// 	images: {type: [String], required: true},
// 	categoryId: {type: String, required: true},
// 	lease_term: {type: Number, required: true},
// 	lease_date: {type: Date, required: true}, //date.setDate(date.getDate() + 7)
// 	expires_at: {type: Date, default: null},
// 	leaser_info: {
// 		userId: {type: String, required: true},
// 		firstName: {type: String, required: true},
// 		lastName: {type: String, required: true},
// 		nickname: {type: String, required: true},
// 		avatar: {type: String, default: null},
// 	},
// 	status: {type: String, default: null},
// 	isPrivate: {type: Boolean, default: false},
// 	condition: {type: String, required: true},
// 	isFree: {type: Boolean, required: true},
// 	location: {type: String, required: true},
// 	date_created: {type: Date, required: true, default: new Date()},
// });


