import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Request,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SetMetadata } from '@nestjs/common';
import {ExistingUserDto} from '../users/dto/existing-user.dto';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

	@Controller('auth')
	export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@Post('signup')
	@HttpCode(HttpStatus.CREATED)
	@UsePipes(ValidationPipe)
	async signup(@Body() user: CreateUserDto) {
		return this.authService.register(user);
	}

	@Public()
	@UseGuards(LocalAuthGuard)
	@Post('login')
	@UsePipes(ValidationPipe)
	async login(@Body() user: ExistingUserDto) {
		return this.authService.login(user);
	}

	@Get('user')
	async getUser(@Request() req) {
		return this.authService.getUser(req.user);
	}

	@Post('logout')
	async logout(@Request() req) {
		return this.authService.logout(req.user);
	}

	@Public()
	@Post('refresh')
	async refresh(@Request() req) {
		return this.authService.refreshToken(req.body);
	}
}
