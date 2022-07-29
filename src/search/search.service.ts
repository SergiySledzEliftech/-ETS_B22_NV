import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product, ProductDocument} from './schemas/product.schema';
import {Category, CategoryDocument} from './schemas/categories.schema';


@Injectable()
export class SearchService {
	constructor(
		@InjectModel(Product.name) private productModel: Model<ProductDocument>,
		@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
	) {}

	async findAllProducts(): Promise<Product[]> {
		return this.productModel.find();
	}

	async getProductByQuery(query): Promise<Product[]> {
		return this.productModel.find(
			{'title': {$regex: '^' + query, $options: 'i'}}
		);
	}

	async getAllCategories(): Promise<any[]> {
		const categories = await this.categoryModel.find();
		return categories.map(({category})=>category);
	}

	async getFilterProducts(options):Promise<Product[]>{
		return this.productModel.find(options);
	}

}
