import {Module} from '@nestjs/common';
import {CommentsController} from './comments.controller';
import {CommentsService} from './comments.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Comment, CommentsSchema} from './schemas/comments.schema';

@Module({
	controllers: [CommentsController],
	providers: [CommentsService],
	imports: [MongooseModule.forFeature([
		{ name: Comment.name , schema: CommentsSchema}
	])]
})
export class CommentsModule {}