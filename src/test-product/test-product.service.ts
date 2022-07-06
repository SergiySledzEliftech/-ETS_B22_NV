import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { CreateTestProductDto } from './dto/create-test-product.dto'
import {UpdateTestProductDto} from "./dto/update-test-product.dto";
import {TestProduct, TestProductDocument} from "./schemas/test-product.shema";

@Injectable()
export class TestProductService {

    constructor(@InjectModel(TestProduct.name) private testProductModel: Model<TestProductDocument>){
    }

    async getAll(): Promise<TestProduct[]>{
        return this.testProductModel.find().exec();
    }

    async getById(id: string): Promise<TestProduct>{
        return this.testProductModel.findById(id);
    }

    async create(testProductDto: CreateTestProductDto): Promise<TestProduct>{
        const newProduct = new this.testProductModel(testProductDto);
        return newProduct.save();
    }

    async remove(id: string): Promise<TestProduct>{
        return this.testProductModel.findByIdAndRemove(id);
    }

    async update(id: string, testProductDto: UpdateTestProductDto): Promise<TestProduct> {
        return this.testProductModel.findByIdAndUpdate(id, testProductDto, {new:true})
    }
}
