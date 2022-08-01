import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPassDto } from './dto/update-user-pass.dto';
import {UpdateUserAvatarDto} from './dto/update-user-avatar.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(firstName: string,
				lastName: string,
				phone: number,
				email: string,
				hashedPassword: string
				): Promise<User> {
  const createdUser = new this.userModel({
				firstName,
				lastName,
				phone,
				email,
				passHash: hashedPassword
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

  async removeRefreshToken(email: string) {
	const filter = { email: email };
	this.userModel.findOneAndUpdate(filter,
		{
		$set:{
			refresh_token : ''
		}
		});
  }
  async findByRefreshTokenId(tokenId:string) {
	const filter = { refresh_token: tokenId };
	const user = await this.userModel.findOne(filter).exec();
	return user;
  }
	async getById(id: string): Promise<User> {
		return this.userModel.findById(id, 'firstName lastName nickname about avatar email phone optionalPhone location rating');
	}

	async update(id: string, userDto: UpdateUserDto): Promise<string> {
	  try {
		  await this.userModel.findByIdAndUpdate(id, userDto, {new: true});
		  return 'User data saved';
	  } catch (e) {
		  return e;
	  }
	}

	async updateAvatar(id: string, userAvatarDto: UpdateUserAvatarDto): Promise<string> {
		try {
			await this.userModel.findByIdAndUpdate(id, userAvatarDto, {new: true});
			return 'Avatar saved';
		} catch (e) {
			return e;
		}
	}

	async updatePass(id: string, userPassDto: UpdateUserPassDto): Promise<Promise<User> | string>  {
		const userOldPassHashFromBD: string = (await this.userModel.findById(id)).passHash;

		if(await bcrypt.compare(userPassDto.oldPass, userOldPassHashFromBD)){
			const hashedNewPass: string = await bcrypt.hash(userPassDto.newPass, 12);
			try {
				await this.userModel.findByIdAndUpdate(id, { passHash: hashedNewPass }, {new: true});
				return `Password changed`;
			} catch (e) {
				return 'Error:' + e;
			}
		} else {
			return 'Sorry. Old pass failed';
		}
	}
}
