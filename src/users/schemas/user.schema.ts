import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: number;

  @Prop()
  email: string;

  @Prop()
  passHash: string;

  @Prop()
  refresh_token: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
