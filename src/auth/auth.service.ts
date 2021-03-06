import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuid } from 'uuid';
import { jwtRtConstants } from './constants';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService,
				private jwtService: JwtService
		) {}
		async hashPassword (passHash: string): Promise<string> {
		return bcrypt.hash(passHash, 12);
		}

	// tslint:disable-next-line:no-any
		async register(user: Readonly<CreateUserDto>): Promise<User | any> {
		const { firstName, lastName, phone, email, passHash } = user;
		const existingUser = await this.usersService.findByEmail(email);
			if (existingUser) {
				throw new HttpException(
				'An account with that email already exists!',
				HttpStatus.CONFLICT,
		);
			}
		const hashedPassword = await this.hashPassword(passHash);
		await this.usersService.create(firstName, lastName, phone, email, hashedPassword);
		}

		async comparePassword( passHash: string, hashedPassword: string ): Promise<boolean> {
		return bcrypt.compare(passHash, hashedPassword);
		}

	// tslint:disable-next-line:no-any
		async validateUser(email: string): Promise<any> {
		const user = await this.usersService.findByEmail(email);
		if (this.comparePassword) {
			return user;
		}
		return null;
		}
	// tslint:disable-next-line:no-any
		async issueTokenPair(payload: any) {
		const refreshTokenId = uuid();

		const refresh_token = this.jwtService.sign({refreshTokenId}, {
			secret: jwtRtConstants.secret,
			expiresIn: '30d',
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
				firstName: userInCollection.firstName,
				lastName: userInCollection.lastName,
				phone: userInCollection.phone,
				email: userInCollection.email};
		return {user};
		}

	// tslint:disable-next-line:no-any
		async refreshToken(req: any) {
			// tslint:disable-next-line:no-any
			const payloadRt = this.jwtService.decode(req.refresh_token) as { [key: string]: any;};
			const user = await this.usersService.findByRefreshTokenId(payloadRt.refreshTokenId);
			const payloadAt = { username: user.email, sub: user._id };
			const res = await this.issueTokenPair(payloadAt);
			return res;
		}

	// tslint:disable-next-line:no-any
		async logout(payload: any) {
			await this.usersService.removeRefreshToken(payload.username);
		}
}

