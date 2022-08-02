import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PremiumController } from './premium.controller';
import { PremiumService } from './premium.service';
import { Product, ProductSchema } from './schemas/products.schema';

@Module({
  imports:[MongooseModule.forFeature([
	{name:Product.name, schema:ProductSchema}
  ])],
  providers: [PremiumService],
  controllers: [PremiumController]
})
export class PremiumModule {}
