import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
// import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  authService: AuthService;
  constructor(
    private readonly appService: AppService) {}
// @UseGuards(LocalAuthGuard)
// @Post('auth/login')
// async login(@Request() req) {
//   return this.authService.login(req.user);
// }
// @UseGuards()
//   @Get('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }


  @Get()
  getHello(): string {
	return this.appService.getHello();
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.body);
    
    return req.body;
  }
  // @Post('auth/login')
  // public async login(@Request() req): Promise<any> {
  //   console.log(req.body);
    
  //   return this.authService.login(req.body);
  // }
}
