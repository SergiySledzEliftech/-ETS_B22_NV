import { Controller, Post, Get, Body, HttpStatus, HttpCode, Header} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    // @Post('signup')
    // @HttpCode(HttpStatus.CREATED)
    // @Header('Access-Control-Allow-Origin', '*')
    // signup(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }
    @Get()
    getAll() {
        return this.usersService.findAll();
    }

}