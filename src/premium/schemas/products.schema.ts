import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document

@Schema()
export class Product {
    
@Prop()
title:string

@Prop()
price:number

@Prop()
description:string

@Prop()
rating:number

@Prop()
brand:string

@Prop()
category:string

@Prop()
thumbnail:string

@Prop()
images:Array<string>

@Prop()
categoryId:string

@Prop()
lease_term:number

@Prop()
lease_date:number

@Prop()
expires_at:string

@Prop({type:Object})
leaser_info:any

@Prop()
status:string

@Prop()
isPrivate:boolean

@Prop()
condition:string

@Prop()
isFree:boolean

@Prop()
location:string

@Prop()
date_created:number
}

export const ProductSchema = SchemaFactory.createForClass(Product)