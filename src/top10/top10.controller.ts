import { Controller, Get } from '@nestjs/common';
import { Product } from './schemas/products.schema';
import { Top10Service } from './top10.service';

@Controller('top10')
export class Top10Controller {
    constructor (private readonly productService:Top10Service) {}

    @Get()
    getProducts():Promise<Product[]>{
        return this.productService.getProducts()
    }
}
