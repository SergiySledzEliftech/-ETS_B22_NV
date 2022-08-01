import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
	if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
		return callback(
			new HttpException(
				'Only image files are allowed!',
				HttpStatus.BAD_REQUEST,
			),
			false,
		);
	}
	callback(null, true);
};

export const editProfileFileName = (req, file, callback) => {
	const fileExtName = extname(file.originalname);

	callback(null, `${req.params.id}${fileExtName}`);
};

