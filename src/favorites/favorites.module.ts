import {Module} from '@nestjs/common';
import {FavoritesController} from './favorites.controller';
import {FavoritesService} from './favorites.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Favorites, FavoritesSchema} from './schemas/favorites.schema';

@Module({
	controllers: [FavoritesController],
	providers: [FavoritesService],
	imports: [MongooseModule.forFeature([
		{ name: Favorites.name , schema: FavoritesSchema}
	])]
})
export class FavoritesModule {}