import {IsNotEmpty, IsString } from 'class-validator';


export class UpdateUserAvatarDto {
	@IsNotEmpty()
	@IsString()
	readonly avatar: string;
}
