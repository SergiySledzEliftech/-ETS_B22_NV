import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreatePaymentsDto } from "./dto/create-payments.dto";
import { PaymentsService } from "./payments.service";


@Controller('/payments')
export class PaymentsController {
    constructor(private paymentsService: PaymentsService) { }
    
    @Post()
    create(@Body() dto: CreatePaymentsDto) {
        return this.paymentsService.create(dto)
    }

    @Get()
    getAll() {
        return this.paymentsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.paymentsService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.paymentsService.delete(id)
    }
}