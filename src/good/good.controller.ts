import {Body, Controller, Get, Header, Param, Put} from '@nestjs/common';
import { GoodService } from './good.service';
import {UpdateProductDto} from './dto/update-product.dto';
import {Product} from './schemas/good.schema';

@Controller('products')
export class GoodController {
	constructor(private readonly goodService: GoodService) {}

	@Get(':id')
	@Header('Access-Control-Allow-Origin', '*')
	getGood(@Param('id') id: string) {
		return this.goodService.getGoodById(id);
	}

	@Put(':id')
	@Header('Access-Control-Allow-Origin', '*')
	update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product>{
		return this.goodService.updateGood(id, updateProductDto);
	}
}
