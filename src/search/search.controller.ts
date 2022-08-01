import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {SearchService} from './search.service';
import {Products} from './schemas/products.schema';
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

	async findAllCategories(): Promise<string[]> {
		return this.searchService.getAllCategories();
	}
}
