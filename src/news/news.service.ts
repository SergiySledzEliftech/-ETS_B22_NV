import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
    
    constructor(@InjectModel(News.name) private newsModel : Model<NewsDocument>){}

    async getAllArticles (): Promise<News[]> {
        return this.newsModel.find().exec()
    }

    async getOneArticle (param:string) : Promise<News>{
        if(isNaN(Number(param))){
            return this.newsModel.findById(param)
        }

        else{
            const news = await this.newsModel.find().exec()
            return news[param]
        }
    }

    async addArticle (CreateNewsDto : CreateNewsDto) : Promise<News> {
        const newArticle = new this.newsModel(CreateNewsDto);
        return newArticle.save()
    }

    async removeArticle(id: string): Promise<News>{
        return this.newsModel.findByIdAndRemove(id);
    }

    async updateArticle(id: string, newsDto: UpdateNewsDto): Promise<News> {
        return this.newsModel.findByIdAndUpdate(id, newsDto, {new:true})
    }
}
