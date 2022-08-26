import { Public } from '../auth/auth.controller';
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './schemas/orders.schema';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';

@Public()
@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get()
	async getList(@Query('userId') userId: string): Promise<Orders> {
		return this.ordersService.getOrderByUserId(userId);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	async createRentedList(
		@Body() createOrdersListDTO: CreateOrdersDto
	): Promise<Orders> {
		return this.ordersService.createOrder(createOrdersListDTO);
	}

	@Put()
	async updateRentedList(
		@Body() updateOrdersDTO: UpdateOrdersDto,
		@Query('userId') userId: string
	): Promise<Orders> {
		return this.ordersService.updateOrder(updateOrdersDTO, userId);
	}

	@Delete()
	async removeRentedList(
		@Query('userId') userId: string
	): Promise<Orders> {
		return this.ordersService.removeOrder(userId);
	}
}