import { Controller, Get, Post,UseInterceptors, UploadedFile, Res, Param, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editProfileFileName, imageFileFilter } from '../utils/file-upload.utils';
import { Public } from '../auth/auth.controller';

@Controller('files')
export class FilesController {
	constructor() {}
	// upload single file
	@Post(':id')
	@Public()
	@UseInterceptors(
		FileInterceptor('avatarUploader', {
			storage: diskStorage({
				destination: './public/profiles',
				filename: editProfileFileName,
			}),
			fileFilter: imageFileFilter,
		}),
	)
	async uploadedFile(@UploadedFile() file, @Param('id') id ) {

		const response = {
			originalname: await file.originalname,
			filename: await file.filename,
		};
		return {
			status: HttpStatus.OK,
			message: 'Image uploaded successfully!',
			data: response,
		};
	}

	@Get(':imagename')
	@Public()
	getImage(@Param('imagename') image, @Res() res) {
		const response = res.sendFile(image, { root: './public/profiles' });
		return {
			status: HttpStatus.OK,
			data: response,
		};
	}
}
