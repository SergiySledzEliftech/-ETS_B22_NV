import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PaymentsController } from "./payments.controller";
import { PaymentsService } from "./payments.service";
import {Payments, PaymentsSchema} from './schemas/payments.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Payments.name, schema: PaymentsSchema}])
    ],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})

export class PaymentsModule{}