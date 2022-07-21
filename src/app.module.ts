import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { NewsModule } from './news/news.module';
import { AppGateway } from './app.gateway';
import { StatisticsModule } from './statistics/statistics.module';
import { Top10Controller } from './top10/top10.controller';
import { Top10Module } from './top10/top10.module';

@Module({
	imports: [
		TestProductModule,
		NewsModule,
		ConfigModule.forRoot(),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
		StatisticsModule,
		Top10Module,
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
