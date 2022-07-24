import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';

// <<<<<<< HEAD
// import { GoodController } from './good/good.controller';
//
// @Module({
//   // tslint:disable-next-line:max-line-length
//   imports: [TestProductModule, MongooseModule.forRoot
//   'mongodb+srv://serhii:12345@cluster0.hr9dt.mongodb.net/?retryWrites=true&w=majority')],
//   controllers: [AppController, GoodController],
//   providers: [AppService],
// =======

import { AppGateway } from './app.gateway';
import {CommentsModule} from './comments/comments.module';

@Module({
	imports: [
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
