import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Products, ProductsDocument} from './schemas/products.schema';
import {Category, CategoryDocument} from './schemas/categories.schema';


@Injectable()
export class SearchService {
	constructor(
		@InjectModel(Products.name) private productModel: Model<ProductsDocument>,
		@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
	) {}

	async findAllProducts(): Promise<Products[]> {
		return this.productModel.find();
	}

	async getProductByQuery(query): Promise<Products[]> {
		return this.productModel.find(
			{'title': {$regex: '^' + query, $options: 'i'}}
		);
	}

	// tslint:disable-next-line:no-any
	async getAllCategories(): Promise<any[]> {
		const categories = await this.categoryModel.find();
		return categories.map(({category})=>category);
	}

	async getFilterProducts(options):Promise<Products[]>{
		return this.productModel.find(options);
	}

}
