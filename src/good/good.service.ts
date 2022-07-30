import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product, ProductDocument} from './schemas/good.schema';
import {UpdateProductDto} from './dto/update-product.dto';

@Injectable({})
export class GoodService {
	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
	}
	async getGoodById(id: string): Promise<Product> {
		return this.productModel.findById(id);
	}
	async updateGood(id: string, productDto: UpdateProductDto): Promise<Product> {
		return this.productModel.findByIdAndUpdate(id, productDto, {new: true});
	}
	async getGoodRecommendations(id: string, category, min, max, status, minRating): Promise<Product[]> {
		return this.productModel.find({
			_id : { $ne: id},
			category: category,
			status: status,
			price: {$gte: min, $lte: max},
			rating: {$gte: minRating}
		}).limit(3).exec();
	}
}