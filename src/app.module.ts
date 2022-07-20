import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProductModule } from './test-product/test-product.module';
import { NewsModule } from './news/news.module';

@Module({
  // imports: [TestProductModule, MongooseModule.forRoot('mongodb+srv://serhii:12345@cluster0.hr9dt.mongodb.net/?retryWrites=true&w=majority'), NewsModule],
  imports: [TestProductModule, MongooseModule.forRoot('mongodb://localhost:27017'), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
