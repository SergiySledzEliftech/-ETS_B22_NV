import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class Top10Service {
	constructor(@InjectModel(Product.name) private productModel:Model<ProductDocument>){}

	async getProducts():Promise<Product[]>{
		const allProducts = await this.productModel.find().exec();
		return allProducts.sort((p1, p2)=>p2.rating - p1.rating).slice(0, 10);
	}
}
