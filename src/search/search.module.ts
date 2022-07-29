import {Module} from '@nestjs/common';
import {SearchController} from './search.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { SearchService } from './search.service';
import {Product, ProductSchema} from './schemas/product.schema';
import {Category, CategorySchema} from './schemas/categories.schema';



@Module({
	imports: [MongooseModule.forFeature([
		{name: Product.name, schema: ProductSchema},
		{name: Category.name, schema: CategorySchema}
	])],
	controllers: [SearchController],
	providers: [SearchService]
})
export class SearchModule{

}

