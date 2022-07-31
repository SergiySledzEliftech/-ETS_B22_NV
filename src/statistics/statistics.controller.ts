import { Controller, Get, Param, Put } from '@nestjs/common';
import { Statistics } from './schemas/statistics.schema';
import { StatisticsService } from './statistics.service';

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

	@Put(':route')
	async updateArticle(@Param('route') route:string){
		return this.statisticsService.updateStatistics(route);
	}
}
