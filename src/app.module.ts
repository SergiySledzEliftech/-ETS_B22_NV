import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
	TestProductModule, 
	MongooseModule.forRoot('mongodb+srv://mongoUser:mongoUser@cluster0.j25ouwy.mongodb.net/test'),
	AuthModule,
	PassportModule,
	UsersModule],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
