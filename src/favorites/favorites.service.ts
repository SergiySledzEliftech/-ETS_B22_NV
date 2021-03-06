import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Favorites, FavoritesDocument} from './schemas/favorites.schema';
import {FavoriteDto} from './dto/favorites.dto';

@Injectable({})
export class FavoritesService{
    constructor(@InjectModel(Favorites.name) private favoritesModel: Model<FavoritesDocument>) {}

    async GetFavorites(user: string): Promise<Favorites[]> {
        return this.favoritesModel.find({'userId': user})
    };

    async AddToFavorites(favoriteDto: FavoriteDto): Promise<Favorites> {
        const newFavorite = new this.favoritesModel(favoriteDto);
        return newFavorite.save();
    };

    async DeleteFromFavorites(id: string): Promise<Favorites> {
        return this.favoritesModel.
        findByIdAndRemove(id);
    };

    async isFavorite(id: string, userId: string): Promise<Favorites[]> {
        return this.favoritesModel.find({'userId': userId, 'item._id': id})
    }
}
