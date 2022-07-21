import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { NewsModule } from './news/news.module';
import { AppGateway } from './app.gateway';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
	imports: [
		TestProductModule,
		NewsModule,
		ConfigModule.forRoot(),
		// MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
		MongooseModule.forRoot(`mongodb://localhost:27017`),
		StatisticsModule,
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
