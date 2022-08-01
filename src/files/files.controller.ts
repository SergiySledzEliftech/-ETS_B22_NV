import { Controller, Get, Post,UseInterceptors, UploadedFile, UploadedFiles, Res, Param, HttpStatus } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {editFileName, editProfileFileName, imageFileFilter} from '../utils/file-upload.utils';
import {Public} from '../auth/auth.controller';

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
		// tslint:disable-next-line:no-console
		console.log(await file);
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

	@Post('uploadMultipleFiles')
	@UseInterceptors(
		FilesInterceptor('image', 10, {
			storage: diskStorage({
				destination: './uploads',
				filename: editFileName,
			}),
			fileFilter: imageFileFilter,
		}),
	)
	async uploadMultipleFiles(@UploadedFiles() files) {
		const response = [];
		files.forEach(file => {
			const fileReponse = {
				originalname: file.originalname,
				filename: file.filename,
			};
			response.push(fileReponse);
		});
		return {
			status: HttpStatus.OK,
			message: 'Images uploaded successfully!',
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
