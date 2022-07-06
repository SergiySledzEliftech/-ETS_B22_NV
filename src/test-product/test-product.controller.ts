import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateTestProductDto} from "./dto/create-test-product.dto";
import {UpdateTestProductDto} from "./dto/update-test-product.dto";
import {TestProductService} from "./test-product.service";
import {TestProduct} from "./schemas/test-product.shema";

@Controller('test-product')
export class TestProductController {
    constructor(private readonly  testProductService: TestProductService) {
    }

    @Get()
    findAll(): Promise<TestProduct[]> {
        // return 'This action returns all cats';
        return this.testProductService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<TestProduct> {
        // return 'This action returns all cats';
        return this.testProductService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createTestProductDTO: CreateTestProductDto): Promise<TestProduct>{
        return this.testProductService.create(createTestProductDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<TestProduct>{
        return this.testProductService.remove(id);
    }

    @Put(':id')
    update(@Body() updateTestProductDto: UpdateTestProductDto, @Param(':id') id: string): Promise<TestProduct>{
        return this.testProductService.update(id, updateTestProductDto);
    }

}