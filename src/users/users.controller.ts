import { Body, Controller, Get, HttpCode, HttpStatus, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {

	constructor (private readonly usersService: UsersService) {

	}

	@Get()
	getAll(): Promise<User[]> {
		return this.usersService.getAll();
	}

	@Get(':id')
	getUser(@Param('id') id): Promise<User> {
		return this.usersService.getById(id);
	}

	@Put(':id')
	updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id): Promise<User> {
		return this.usersService.update(id, updateUserDto);
	}
}

