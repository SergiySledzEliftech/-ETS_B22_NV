import {Controller, Get, Header, Param} from '@nestjs/common';
import {GoodService} from './good.service';

@Controller('products')
export class GoodController {
	constructor(private goodService: GoodService) {}

	@Get(':id')
	@Header('Access-Control-Allow-Origin', '*')
	getGood(@Param('id') id: string) {}
}
