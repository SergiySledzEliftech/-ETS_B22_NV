import {Body, Controller, Get, Param, Put, Query} from '@nestjs/common';
import { GoodService } from './good.service';
import {UpdateProductDto} from './dto/update-product.dto';
import {Product} from './schemas/good.schema';

@Controller('products')
export class GoodController {
	constructor(private readonly goodService: GoodService) {}

	@Get(':id')
	getGood(@Param('id') id: string) {
		return this.goodService.getGoodById(id);
	}

	@Put(':id')
	update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product>{
		return this.goodService.updateGood(id, updateProductDto);
	}

	@Get(':id/rec')
	getRecommendations(
		@Param('id') id: string,
		@Query('category') category: string,
		@Query('min') min: number,
		@Query('max') max: number,
		@Query('status') status: string,
		@Query('minRating') minRating: number,
		): Promise<Product[]> {
		return this.goodService.getGoodRecommendations(id, category, min, max, status, minRating);
	}
}
