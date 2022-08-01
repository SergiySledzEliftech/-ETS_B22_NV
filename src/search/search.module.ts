import {Module} from '@nestjs/common';
import {SearchController} from './search.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { SearchService } from './search.service';
import {Products, ProductsSchema} from './schemas/products.schema';
import {Category, CategorySchema} from './schemas/categories.schema';



@Module({
	imports: [MongooseModule.forFeature([
		{name: Products.name, schema: ProductsSchema},
		{name: Category.name, schema: CategorySchema}
	])],
	controllers: [SearchController],
	providers: [SearchService]
})
export class SearchModule{}

