import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { Partner, PartnerSchema } from './scemas/partners.schema';

@Module({
    imports:[MongooseModule.forFeature([
        {name:Partner.name, schema:PartnerSchema}
    ])],
    providers:[PartnersService],
    controllers:[PartnersController]
})
export class PartnersModule {}
