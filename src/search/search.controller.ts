import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {SearchService} from './search.service';
import {Products} from './schemas/products.schema';
import {Category} from './schemas/categories.schema';
import {Options} from './interfaces/options.interface';
import {Public} from '../auth/auth.controller';

@Public()
@Controller('search')
export class SearchController {
	constructor(private readonly searchService: SearchService) {
	}

	@Get()
	async findProductByQuery(@Query('q') q: string): Promise<Products[]> {
		return this.searchService.getProductByQuery(q);
	}

	@Get('all')
	async getAllProducts(): Promise<Products[]> {
		return this.searchService.findAllProducts();
	}

	@Post('filter')
	async filterProducts(@Body() options:Options): Promise<Products[]> {
		return this.searchService.getFilterProducts(options);
	}

	@Get('/categories')
	async findAllCategories(): Promise<Category[]> {
		return this.searchService.getAllCategories();
	}

	@Get('/ads')
	async getProductsByUser(@Query('id') id: string) {
		return this.searchService.getProductsByUser(id);
	}

	@Get('/lent')
	async getLentProductsByUser(@Query('id') id: string) {
		console.log(id);
		return this.searchService.getLentProductsByUser(id);
	}

}
