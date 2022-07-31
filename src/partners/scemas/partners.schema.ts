import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PartnersDocument = Partner & Document

@Schema()
export class Partner {
    @Prop()
    name:string

    @Prop()
    img: string
}

export const PartnerSchema = SchemaFactory.createForClass(Partner)