import { Controller, Get, Param, Put } from '@nestjs/common';
import { Statistics } from './schemas/statistics.schema';
import { StatisticsService } from './statistics.service';
import {Public} from '../auth/auth.controller';

@Public()
@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService:StatisticsService){}

	@Get()
	async getAllStatistics () : Promise<Statistics[]> {
		return this.statisticsService.getAllStatistics();
	}

	@Get(':date')
	async getOneStatistics (@Param('date') date) : Promise<Statistics>{
		return this.statisticsService.getOneStatistics(date);
	}

	@Put(':field')
	async updateArticle(@Param('field') field:string){
		return this.statisticsService.updateStatistics(field);
	}
}
