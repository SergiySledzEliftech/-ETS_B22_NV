import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { AppGateway } from './app.gateway';
import { StatisticsModule } from './statistics/statistics.module';
import { Top10Module } from './top10/top10.module';
import { PremiumController } from './premium/premium.controller';
import { PremiumModule } from './premium/premium.module';

@Module({
	imports: [
		NewsModule,
		ConfigModule.forRoot(),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
		StatisticsModule,
		Top10Module,
		PremiumModule,
	],
	controllers: [
		AppController,
	]
	,
	providers: [
		AppService,
		AppGateway
	],
})
export class AppModule {
}
