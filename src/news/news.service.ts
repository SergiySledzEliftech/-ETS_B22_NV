import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
    
    constructor(@InjectModel(News.name) private newsModel : Model<NewsDocument>){}

    async getAllArticles (): Promise<News[]> {
        return this.newsModel.find().exec()
    }

    async getOneArticle (id:string) : Promise<News>{
        return this.newsModel.findById(id)
    }
}
