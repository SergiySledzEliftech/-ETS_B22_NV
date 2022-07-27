import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  authService: AuthService;
  constructor(
	private readonly appService: AppService) {}
  @Get()
  getHello(): string {
	return this.appService.getHello();
  }

  @Get('profile')
  getProfile(@Request() req) {
	return req.body;
  }

  @Get('categories')
  getCategories(@Request() req) {
  // console.log(req.headers);
	return 'hello';
  }
}
