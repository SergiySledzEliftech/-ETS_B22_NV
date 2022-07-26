import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: number;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  refresh_token: string;

}

export const UserSchema = SchemaFactory.createForClass(User);