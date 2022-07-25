import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

    async updateStatistics(route: string): Promise<Statistics> {
        const statistics = await this.statisticsModel.findOne({date: (new Date()).setHours(0, 0, 0, 0)})
        if(statistics === null){
            const newArticle = new this.statisticsModel({
                date: (new Date()).setHours(0, 0, 0, 0),
                users: [0, 0, 0, 0, 0, 0],
                itemsCreated: [0, 0, 0, 0, 0, 0],
                itemsRented: [0, 0, 0, 0, 0, 0]
            });
            await newArticle.save()
        }

        const currentDbCondition = await this.statisticsModel.findOne({date:(new Date()).setHours(0, 0, 0, 0)})
        const id = currentDbCondition._id
        delete currentDbCondition._id
        delete currentDbCondition.__v

        switch (route){
            case 'update-users':
                currentDbCondition.users = updateStatisticsField(currentDbCondition.users)
                return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true})
            case 'update-items-created':
                currentDbCondition.itemsCreated = updateStatisticsField(currentDbCondition.itemsCreated)
                return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true})
            case 'update-items-rented':
                currentDbCondition.itemsRented = updateStatisticsField(currentDbCondition.itemsRented)
                return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true})  
            default :
                throw new BadRequestException('Invalid route');
        }

        function updateStatisticsField (field) {
            const index = Math.floor((new Date()).getHours()/4)
            field[index] ++
            return field
        }
    }
}
