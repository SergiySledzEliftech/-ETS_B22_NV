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
    signup(@Body() user: CreateUserDto) {
        return this.authService.register(user);

    }
    // @Post('login')
    // @HttpCode(HttpStatus.OK)
    // @Header('Access-Control-Allow-Origin', '*')
    // login(@Body() user: ExistingUserDto): Promise<{ token: string } | null> {
    //     return this.authService.login(user);
    //   }

    @UseGuards(LocalAuthGuard)
    @Header('Access-Control-Allow-Origin', '*')
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    // @Post('logout')
    // async logout(@Request() req) {
    //     return 'logged out';
    // }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    async getUser(@Request() req) {
        return this.authService.getUser(req.user);
    }

}