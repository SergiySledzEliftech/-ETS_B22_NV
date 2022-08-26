import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Product } from '../../good/schemas/good.schema';

export type FavoritesDocument = Favorites & Document;

@Schema()
export class Favorites{
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })	userId: User;
	@Prop({ type: Product})
	item: Product;
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);

