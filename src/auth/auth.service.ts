import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { jwtRtConstants } from './constants';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService,
				private jwtService: JwtService
		) {}
		async hashPassword (password: string): Promise<string> {
		return bcrypt.hash(password, 12);
		}

	// tslint:disable-next-line:no-any
		async register(user: Readonly<CreateUserDto>): Promise<User | any> {
		const { first_name, last_name, phone, email, password } = user;
		const existingUser = await this.usersService.findByEmail(email);
			if (existingUser) {
				throw new HttpException(
				'An account with that email already exists!',
				HttpStatus.CONFLICT,
		);
			}
		const hashedPassword = await this.hashPassword(password);
		await this.usersService.create(first_name, last_name, phone, email, hashedPassword);
		}

		async comparePassword( password: string, hashedPassword: string ): Promise<boolean> {
		return bcrypt.compare(password, hashedPassword);
		}

	// tslint:disable-next-line:no-any
		async validateUser(email: string, password: string): Promise<any> {
		const user = await this.usersService.findByEmail(email);
		if (this.comparePassword) {
			return user;
		}
		return null;
		}
	// tslint:disable-next-line:no-any
		async issueTokenPair(payload: any) {
		const refreshTokenId = uuidv4();
		const refresh_token = this.jwtService.sign({refreshTokenId}, {
			secret: jwtRtConstants.secret,
			expiresIn: '7d',
		});
		await this.usersService.saveRefreshToken(payload.username, refreshTokenId);
		const token = this.jwtService.sign(payload);
		return {
			token,
			refresh_token
		};
		}

	// tslint:disable-next-line:no-any
		async login(user: any) {
		const payload = { username: user.email, sub: user._id };
		const tokenPair = this.issueTokenPair(payload);
		return tokenPair;
		}

	// tslint:disable-next-line:no-any
		async getUser(payload: any) {
		const userInCollection = await this.usersService.findByEmail(payload.username);
		const user = { _id: userInCollection._id,
				first_name: userInCollection.first_name,
				last_name: userInCollection.last_name,
				phone: userInCollection.phone};
		return {user};
		}

}

