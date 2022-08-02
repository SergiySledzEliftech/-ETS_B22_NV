import { Controller, Get } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Partner } from './scemas/partners.schema';
import {Public} from '../auth/auth.controller';

@Public()
@Controller('partners')
export class PartnersController {
	constructor(private readonly partnersService:PartnersService) {}

	@Get()
	async getAllPartners():Promise<Partner[]>{
		return this.partnersService.getAllPartners();
	}
}
