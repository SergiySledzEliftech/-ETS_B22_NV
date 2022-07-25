import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
		secret: jwtConstants.secret,
		signOptions: { expiresIn: '3600s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}