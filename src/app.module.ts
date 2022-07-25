import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { AppGateway } from './app.gateway';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		TestProductModule,
		UsersModule,
		ConfigModule.forRoot(),
		// tslint:disable-next-line:max-line-length
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/12345?retryWrites=true&w=majority`),
		// tslint:disable-next-line:max-line-length
		// MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
	],
	controllers: [
		AppController,]
	,
	providers: [
		AppService,
		AppGateway
	],
})
export class AppModule {
}
