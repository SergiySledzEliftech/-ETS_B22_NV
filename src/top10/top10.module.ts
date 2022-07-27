import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/products.schema';
import { Top10Controller } from './top10.controller';
import { Top10Service } from './top10.service';

@Module({
  imports: [MongooseModule.forFeature([
    {name:Product.name, schema:ProductSchema}
  ])],
  providers: [Top10Service],
  controllers: [Top10Controller]
})
export class Top10Module {}
