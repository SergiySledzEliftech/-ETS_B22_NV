import {Body, Controller, Get, Param, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { UpdateUserPassDto } from './dto/update-user-pass.dto';
import { Public } from '../auth/auth.controller';
import {UpdateUserAvatarDto} from './dto/update-user-avatar.dto';

@Controller('users')
export class UsersController {

	constructor (private readonly usersService: UsersService) {

	}

	@Get()
	async getAll() {
		return this.usersService.findAll();
	}

	@Get(':id')
	@Public()
	async getUser(@Param('id') id): Promise<User> {
		return this.usersService.getById(id);
	}

	@Put(':id')
	@Public()
	@UsePipes(ValidationPipe)
	async updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id): Promise<string> {
		return this.usersService.update(id, updateUserDto);
	}

	@Put(':id/avatar')
	@Public()
	@UsePipes(ValidationPipe)
	async updateUserAvatar(@Body() updateUserAvatarDto: UpdateUserAvatarDto, @Param('id') id): Promise<string> {
		return this.usersService.updateAvatar(id, updateUserAvatarDto);
	}

	@Put(':id/pass')
	@Public()
	@UsePipes(ValidationPipe)
	async updateUserPass(@Body() updateUserPassDto: UpdateUserPassDto, @Param('id') id) {
		return this.usersService.updatePass(id, updateUserPassDto);
	}
}

