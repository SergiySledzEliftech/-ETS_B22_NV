import { Controller, Post, Get, Body, HttpStatus, HttpCode, Header} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    getAll() {
        return this.usersService.findAll();
    }
}