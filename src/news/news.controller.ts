import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService : NewsService){}

    @Get()
    getAllArticles () : Promise<News[]> {
        return this.newsService.getAllArticles()
    }

    @Get(':id')
    getOneArticle (@Param('id') id) : Promise<News>{
        return this.newsService.getOneArticle(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    addArticle (@Body() CreateNewsDto : CreateNewsDto) : Promise<News>{
        return this.newsService.addArticle(CreateNewsDto)
    }

    @Delete(':id')
    removeArticle(@Param('id') id:string){
        return this.newsService.removeArticle(id)
    }

    @Put(':id')
    updateArticle(@Param('id') id:string, @Body() UpdateNewsDto: UpdateNewsDto){
        return this.newsService.updateArticle(id, UpdateNewsDto)
    }
}
