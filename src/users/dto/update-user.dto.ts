import {IsEmail, IsNotEmpty, IsInt} from 'class-validator';

export class UpdateUserDto {
	@IsNotEmpty()
	readonly firstName: string;

	@IsNotEmpty()
	readonly lastName: string;

	readonly nickname: string;

	readonly about: string;

	@IsEmail()
	@IsNotEmpty()
	readonly email: string;

	@IsInt()
	readonly phone: number;

	readonly optionalPhone: string;

	readonly location: string;
}
