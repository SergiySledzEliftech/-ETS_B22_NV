import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';

@Module({
	providers: [UsersService],
	controllers: [UsersController],
	exports: [UsersService],
	imports: [
		MongooseModule.forFeature([
			{name: User.name, schema: UserSchema}
		])
	]
})

export class UsersModule {

}
