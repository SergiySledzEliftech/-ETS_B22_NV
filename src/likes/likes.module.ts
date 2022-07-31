import {Module} from '@nestjs/common';
import {LikesController} from './likes.controller';
import {LikesService} from './likes.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Like, LikesSchema} from './schema/likes.schema';

@Module({
	controllers: [LikesController],
	providers: [LikesService],
	imports: [MongooseModule.forFeature([
		{ name: Like.name, schema: LikesSchema}
	])]
})
export class LikesModule {}