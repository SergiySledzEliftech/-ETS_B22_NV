import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticsDocument = Statistics & Document

@Schema()
export class Statistics{
    @Prop()
    date:number

    @Prop()
    users: Array<number>

    @Prop()
    itemsCreated:Array<number>

    @Prop()
    itemsRented:Array<number>
}

export const StatisticsSchema = SchemaFactory.createForClass(Statistics)