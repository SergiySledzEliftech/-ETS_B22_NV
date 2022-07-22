import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './schemas/products.schema';
import { PremiumService } from './premium.service';

@Controller('premium')
export class PremiumController {
    constructor (private readonly productService:PremiumService) {}

    @Get()
    getProducts():Promise<Product[]>{
        return this.productService.getProducts()
    }

    @Get(':limiter')
    getProductsByLimiter(@Param('limiter') limiter):Promise<Product[]>{
        return this.productService.getProductsByLimiter(limiter)
    }
}
