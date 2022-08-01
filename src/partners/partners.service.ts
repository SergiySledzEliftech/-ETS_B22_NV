import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Partner, PartnersDocument } from './scemas/partners.schema';

@Injectable()
export class PartnersService {
	constructor(@InjectModel(Partner.name) private partnersModel:Model<PartnersDocument>){}

	async getAllPartners():Promise<Partner[]> {
		return this.partnersModel.find().exec();
	}
}
