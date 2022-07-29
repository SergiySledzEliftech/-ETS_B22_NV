import { Injectable } from "@nestjs/common";
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Payments, PaymentsDocument } from './schemas/payments.schema';
import { CreatePaymentsDto } from "./dto/create-payments.dto";

@Injectable()
export class PaymentsService{

    constructor(@InjectModel(Payments.name) private PaymentsModel: Model<PaymentsDocument>){
	}

    async create(dto: CreatePaymentsDto): Promise<Payments> {
        const newPayment = await this.PaymentsModel.create(dto)
        return newPayment
    }

    async getAll(): Promise<Payments[]> {
        const payments = await this.PaymentsModel.find()
        console.log(payments, 111111);
        return payments
    }

    async getOne(id: ObjectId): Promise<Payments> {
        const payment = await this.PaymentsModel.findById(id)
        return payment
    }

    async delete(id: ObjectId): Promise<Payments>{
        const payment = await this.PaymentsModel.findByIdAndDelete(id)
        return payment
    }
}