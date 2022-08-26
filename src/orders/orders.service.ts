import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orders, OrdersDocument } from './schemas/orders.schema';
import { Model } from 'mongoose';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';

@Injectable()
export class OrdersService{
	constructor(@InjectModel(Orders.name) private ordersModel: Model<OrdersDocument>) {}

	async getOrderByUserId(userId: string): Promise<Orders> {
		return this.ordersModel.findOne({ userId: userId});
	}

	async createOrder(createOrders: CreateOrdersDto): Promise<Orders> {
		const newOrder = new this.ordersModel(createOrders);
		return newOrder.save();
	}
	async updateOrder(
		updateOrders: UpdateOrdersDto,
		userId
	): Promise<Orders> {
		return this.ordersModel.findOneAndUpdate({
			userId: userId
		}, updateOrders, { new: true} );
	}
	async removeOrder(userId: string): Promise<Orders> {
		return this.ordersModel.findOneAndDelete({
			userId: userId
		});
	}
}