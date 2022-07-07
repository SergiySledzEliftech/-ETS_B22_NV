import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';

@Module({
  imports: [TestProductModule, MongooseModule.forRoot('mongodb+srv://serhii:12345@cluster0.hr9dt.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
