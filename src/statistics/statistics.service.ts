import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistics, StatisticsDocument } from './schemas/statistics.schema';

@Injectable()
export class StatisticsService {

	constructor (@InjectModel(Statistics.name) private statisticsModel:Model<StatisticsDocument>) {}

	async getAllStatistics (): Promise<Statistics[]> {
		return this.statisticsModel.find().exec();
	}

	async getOneStatistics (dateProp:number) : Promise<Statistics>{
		return this.statisticsModel.findOne({date:dateProp});
	}

	async updateStatistics(field: string): Promise<Statistics> {
		const statistics = await this.statisticsModel.findOne({date: changeTimeZone((new Date())).setHours(0, 0, 0, 0)});
		if(statistics === null){
			const newArticle = new this.statisticsModel({
				date: changeTimeZone((new Date())).setHours(0, 0, 0, 0),
				users: [0, 0, 0, 0, 0, 0],
				itemsCreated: [0, 0, 0, 0, 0, 0],
				itemsRented: [0, 0, 0, 0, 0, 0]
			});
			await newArticle.save();
		}

		const currentDbCondition = await this.statisticsModel.findOne({date:changeTimeZone((new Date())).setHours(0, 0, 0, 0)});
		const id = currentDbCondition._id;

		switch (field){
			case 'users':
				currentDbCondition.users = updateStatisticsField(currentDbCondition.users);
				return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true});
			case 'itemsCreated':
				currentDbCondition.itemsCreated = updateStatisticsField(currentDbCondition.itemsCreated);
				return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true});
			case 'itemsRented':
				currentDbCondition.itemsRented = updateStatisticsField(currentDbCondition.itemsRented);
				return this.statisticsModel.findByIdAndUpdate(id, currentDbCondition, {new:true});
		}

		function updateStatisticsField (field) {
			const index = Math.floor(changeTimeZone((new Date())).getHours()/4);
			field[index] ++;
			return field;
		}

		function changeTimeZone(date) {
			const timeZone = 'Europe/Kiev';
			date = new Date(date);

			return new Date(
			date.toLocaleString('en-US', {
				timeZone
			})
			);
		  }
	}
}
