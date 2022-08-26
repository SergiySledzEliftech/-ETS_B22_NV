import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {FavoritesService} from './favorites.service';
import {Favorites} from './schemas/favorites.schema';
import {FavoriteDto} from './dto/favorites.dto';
import { Public } from 'src/auth/auth.controller';

@Public()
@Controller('favorites')
export class FavoritesController{
	constructor(private readonly favoritesService: FavoritesService) {}

<<<<<<< HEAD
    @Get()
    GetFavorites(@Query('user') user: string):
    Promise<Favorites[]> {
        return this.favoritesService.GetFavorites(user);
    }
=======
	@Get()
	GetFavorites(@Query('userId') userId: string):
	Promise<Favorites[]> {
		return this.favoritesService.GetFavorites(userId);
	}
>>>>>>> Oleg

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	AddToFavorites(@Body() FavoriteDTO: FavoriteDto):
	Promise<Favorites>{
		return this.favoritesService.AddToFavorites(FavoriteDTO);
	}

<<<<<<< HEAD
    @Delete(':id')
    remove(@Param('id') id: string): Promise<Favorites> {
        return this.favoritesService.DeleteFromFavorites(id)
    }

    @Get('isfav')
    isFavorite(@Query('id') id: string, @Query('user') user: string): Promise<Favorites[]> {
        return this.favoritesService.isFavorite(id, user)
    }
=======
	@Delete(':id')
	remove(@Param('id') id: string): Promise<Favorites> {
		return this.favoritesService.DeleteFromFavorites(id);
	}
>>>>>>> Oleg
}