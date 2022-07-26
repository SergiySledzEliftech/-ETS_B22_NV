import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	@HttpCode(HttpStatus.CREATED)
	@Header('Access-Control-Allow-Origin', '*')
	async signup(@Body() user: CreateUserDto) {
		return this.authService.register(user);
	}

	@UseGuards(LocalAuthGuard)
	@Header('Access-Control-Allow-Origin', '*')
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('user')
	async getUser(@Request() req) {
		return this.authService.getUser(req.user);
	}



}
