import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestProductService } from './test-product.service';
import { TestProductController } from './test-product.controller';
import {TestProduct, TestProductSchema} from './schemas/test-product.shema';

@Module({
	imports: [MongooseModule.forFeature([
		{ name: TestProduct.name, schema: TestProductSchema }])],
	controllers: [TestProductController],
	providers: [TestProductService],
})

export class TestProductModule {
}