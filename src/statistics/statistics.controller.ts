import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateStatisticsDto } from './dto/create-statistics.dto';
import { UpdateStatisticsDto } from './dto/update-statistics.dto';
import { Statistics } from './schemas/statistics.schema';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor(private readonly statisticsService:StatisticsService){}

    @Get()
    getAllStatistics () : Promise<Statistics[]> {
        return this.statisticsService.getAllStatistics()
    }

    @Get(':date')
    getOneStatistics (@Param('date') date) : Promise<Statistics>{
        return this.statisticsService.getOneStatistics(date)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    addStatistics (@Body() CreateStatisticsDto : CreateStatisticsDto) : Promise<Statistics>{
        return this.statisticsService.addStatistics(CreateStatisticsDto)
    }

    @Put(':id')
    updateArticle(@Param('id') id:string, @Body() UpdateStatisticsDto:UpdateStatisticsDto){
        return this.statisticsService.updateStatistics(id, UpdateStatisticsDto)
    }
}
