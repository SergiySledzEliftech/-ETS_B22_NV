import { Controller, Get } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Partner } from './scemas/partners.schema';

@Controller('partners')
export class PartnersController {
    constructor(private readonly partnersService:PartnersService) {}

    @Get()
    getAllPartners():Promise<Partner[]>{
        return this.partnersService.getAllPartners()
    }
}
