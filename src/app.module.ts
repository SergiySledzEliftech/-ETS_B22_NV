import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppGateway } from './app.gateway';
import { UsersModule } from './users/users.module';
import { GoodModule } from './good/good.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule} from './likes/likes.module';

@Module({
	imports: [
		UsersModule,
		GoodModule,
		CommentsModule,
		LikesModule,
		TestProductModule,
		ConfigModule.forRoot(),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
		AuthModule,
		PassportModule,
	],
	controllers: [
		AppController]
	,
	providers: [
		AppService,
		AppGateway,
		JwtService
	],
})
export class AppModule {}
