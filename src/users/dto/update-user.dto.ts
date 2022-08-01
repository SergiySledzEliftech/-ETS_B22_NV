import {IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString} from 'class-validator';

export class UpdateUserDto {
	@IsString()
	@IsNotEmpty()
	readonly firstName: string;

	@IsString()
	@IsNotEmpty()
	readonly lastName: string;

	@IsString()
	readonly nickname: string;

	@IsString()
	readonly about: string;

	@IsString()
	readonly avatar: string;

	@IsEmail()
	@IsNotEmpty()
	readonly email: string;

	@IsNumber()
	readonly phone: number;

	@IsString()
	@IsNumberString()
	readonly optionalPhone: string;

	@IsString()
	readonly location: string;
}
