import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(first_name: string,
				last_name: string,
				phone: number,
				email: string,
				hashedPassword: string
				): Promise<User> {
  const createdUser = new this.userModel({
				first_name,
				last_name,
				phone,
				email,
				password: hashedPassword
  });
	return createdUser.save();
  }

  async findByEmail(email:string): Promise<UserDocument | null> {
	return this.userModel.findOne({email}).exec();
  }

  async findAll(): Promise<User[]> {
	return this.userModel.find().exec();
  }

  async saveRefreshToken(email: string, tokenId: string) {
	const filter = { email: email };
	this.userModel.findOneAndUpdate(filter,
		{
		$set:{
			refresh_token : tokenId
		}
		});
  }

}
