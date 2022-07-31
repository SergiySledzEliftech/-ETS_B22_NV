import {Body, Controller, Get, Param, Put, Query} from '@nestjs/common';
import { GoodService } from './good.service';
import {UpdateProductDto} from './dto/update-product.dto';
import {Product} from './schemas/good.schema';
import {Public} from '../auth/auth.controller';

@Public()
@Controller('products')
export class GoodController {
	constructor(private readonly goodService: GoodService) {}

	@Get(':id')
	async getGood(@Param('id') id: string) {
		return this.goodService.getGoodById(id);
	}

	@Put(':id')
	async update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product>{
		return this.goodService.updateGood(id, updateProductDto);
	}

	@Get(':id/rec')
	async getRecommendations(
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
