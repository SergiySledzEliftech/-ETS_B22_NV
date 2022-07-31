import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import {UpdateUserPassDto} from './dto/update-user-pass.dto';

@Controller('users')
export class UsersController {

	constructor (private readonly usersService: UsersService) {

	}

	@Get()
	async getAll() {
		return this.usersService.findAll();
	}

	@Get(':id')
	getUser(@Param('id') id): Promise<User> {
		return this.usersService.getById(id);
	}

	@Put(':id')
	updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id): Promise<User> {
		return this.usersService.update(id, updateUserDto);
	}

	@Put(':id/pass')
	updateUserPass(@Body() updateUserPassDto: UpdateUserPassDto, @Param('id') id) {
		return this.usersService.updatePass(id, updateUserPassDto);
	}
}

