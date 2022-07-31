import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Statistics, StatisticsSchema } from './schemas/statistics.schema';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

@Module({
  imports: [MongooseModule.forFeature([
	{ name:Statistics.name, schema:StatisticsSchema }
  ])],
  providers: [StatisticsService],
  controllers: [StatisticsController]
})
export class StatisticsModule {}
