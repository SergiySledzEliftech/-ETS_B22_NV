import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {
	constructor(private readonly newsService : NewsService){}

	@Get()
	getAllArticles () : Promise<News[]> {
		return this.newsService.getAllArticles();
	}

	@Get(':id')
	getOneArticle (@Param('id') id) : Promise<News>{
		return this.newsService.getOneArticle(id);
	}
}
