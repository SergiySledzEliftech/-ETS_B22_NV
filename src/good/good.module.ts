import { Module } from '@nestjs/common';
import { GoodController } from './good.controller';
import { GoodService } from './good.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Product, ProductSchema} from './schemas/good.schema';

@Module({
	controllers: [GoodController],
	providers: [GoodService],
	imports: [MongooseModule.forFeature([
		{ name: Product.name, schema: ProductSchema }
	])]
})
export class GoodModule {}