import {Body, Controller, Get, Query} from '@nestjs/common';
import {SearchService} from './search.service';
import {Product} from './schemas/product.schema';
import {Category} from './schemas/categories.schema';
import {Options} from './interfaces/options.interface';

@Controller('search')
export class SearchController {
	constructor(private readonly searchService: SearchService) {
	}

	@Get()
	async findProductByQuery(@Query('q') q: string): Promise<Product[]> {
		return this.searchService.getProductByQuery(q);
	}

	@Get('all')
	async getAllProducts(): Promise<Product[]> {
		return this.searchService.findAllProducts();
	}

	@Get('filter')
	async filterProducts(@Body() options:Options): Promise<Product[]> {
		return this.searchService.getFilterProducts(options);
	}

	@Get('/categories')
	findAllCategories(): Promise<Category[]> {
		return this.searchService.getAllCategories();
	}

}
