import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { AppGateway } from './app.gateway';
import { UsersModule } from './users/users.module';
import { GoodModule } from './good/good.module';
import { CommentsModule } from './comments/comments.module';

@Module({
	imports: [
		UsersModule,
		GoodModule,
		CommentsModule,
		TestProductModule,
		ConfigModule.forRoot(),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
	],
	controllers: [
		AppController]
	,
	providers: [
		AppService,
		AppGateway
	],
})
export class AppModule {
}
