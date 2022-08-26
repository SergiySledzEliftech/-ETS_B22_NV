import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './schemas/orders.schema';

@Module({
	controllers: [OrdersController],
	providers: [OrdersService],
	imports: [MongooseModule.forFeature([
		{ name: Orders.name, schema: OrdersSchema }
	])]
})
export class OrdersModule {}