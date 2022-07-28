import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPassDto } from './dto/update-user-pass.dto';

@Injectable()
export class UsersService {
	private authService: AuthService;
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
	  this.updatePass = this.updatePass.bind(this);
  }

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

	async getById(id: string): Promise<User> {
		return this.userModel.findById(id);
	}

	async update(id: string, userDto: UpdateUserDto): Promise<User> {
		return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
	}

	async updatePass(id: string, userPassDto: UpdateUserPassDto) {
		const userOldPassHashFromBD: string = (await this.getById(id)).passHash;
		// tslint:disable-next-line:no-console
		console.log(userOldPassHashFromBD);
		// tslint:disable-next-line:no-console
		console.log(userPassDto.oldPass);
		// const userOldPassHash: string = await this.authService.hashPassword(userPassDto.oldPass);
		// tslint:disable-next-line:no-console
		// console.log(userOldPassHash);

		if(await this.authService.comparePassword(userPassDto.oldPass, userOldPassHashFromBD)){
			const hashedNewPass: string = await this.authService.hashPassword(userPassDto.newPass);
			return this.userModel.findByIdAndUpdate(id, { passHash: hashedNewPass }, {new: true});
			// tslint:disable-next-line:no-console
			// console.log(hashedNewPass);
		} else {
			// tslint:disable-next-line:no-console
			console.log('false compare hash');
		}


		// HERE TODO get user passes from dto, compare old passes, change new pass if is OK
	}
}
