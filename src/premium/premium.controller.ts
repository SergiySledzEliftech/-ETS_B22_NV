import { Controller, Get } from '@nestjs/common';
import { Product } from './schemas/products.schema';
import { PremiumService } from './premium.service';
import {Public} from '../auth/auth.controller';

@Public()
@Controller('premium')
export class PremiumController {
	constructor (private readonly productService:PremiumService) {}

	@Get()
	async getProducts():Promise<Product[]>{
		return this.productService.getProducts();
	}
}
