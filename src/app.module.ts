import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AppGateway } from './app.gateway';
import { StatisticsModule } from './statistics/statistics.module';
import { Top10Module } from './top10/top10.module';
import { PremiumModule } from './premium/premium.module';
import { PartnersModule } from './partners/partners.module';
import { SearchModule } from './search/search.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
	imports: [
		NewsModule,
		ConfigModule.forRoot(),
		MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hr9dt.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
		StatisticsModule,
		Top10Module,
		PremiumModule,
		AuthModule,
		PassportModule,
		UsersModule,
		PartnersModule,
		SearchModule,
		MulterModule.register({
			dest: './uploads',
		}),
		FilesModule
	],
	controllers: [
		AppController,
	]
	,
	providers: [
		AppService,
		AppGateway,
		JwtService,
	],
})
export class AppModule {}
