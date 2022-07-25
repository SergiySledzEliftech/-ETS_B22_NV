import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import {promises} from 'dns';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
	}

	async getAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async getById(id: string): Promise<User> {
		return this.userModel.findById(id);
	}

	async update(id: string, userDto: UpdateUserDto): Promise<User> {
		return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
	}
}

