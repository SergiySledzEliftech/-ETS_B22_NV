import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatisticsDto } from './dto/create-statistics.dto';
import { UpdateStatisticsDto } from './dto/update-statistics.dto';
import { Statistics, StatisticsDocument } from './schemas/statistics.schema';

@Injectable()
export class StatisticsService {

    constructor (@InjectModel(Statistics.name) private statisticsModel:Model<StatisticsDocument>) {}

    async getAllStatistics (): Promise<Statistics[]> {
        return this.statisticsModel.find().exec()
    }

    async getOneStatistics (dateProp:number) : Promise<Statistics>{
        return this.statisticsModel.findOne({date:dateProp})
    }

    async addStatistics (CreateNewsDto : CreateStatisticsDto) : Promise<Statistics> {
        const newArticle = new this.statisticsModel(CreateNewsDto);
        return newArticle.save()
    }

    async updateStatistics(id: string, newsDto: UpdateStatisticsDto): Promise<Statistics> {
        return this.statisticsModel.findByIdAndUpdate(id, newsDto, {new:true})
    }
}
