import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class PremiumService {
    constructor(@InjectModel(Product.name) private productModel:Model<ProductDocument>){}

    async getProducts():Promise<Product[]>{
        const allProducts = await this.productModel.find().exec()
        return allProducts.filter(e=>{
            return e.condition === 'new' && e.isFree === false && e.rating >= 4
        })
    }
}