import { UpdateProductDto } from 'src/good/dto/update-product.dto';

export class FavoriteDto {
	userId: string;
	item: UpdateProductDto;
}