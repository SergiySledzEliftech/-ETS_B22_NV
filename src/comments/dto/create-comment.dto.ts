export class CreateCommentDto {
	userId: string;
	productId: string;
	comment: string;
	advantages: string;
	disadvantages: string;
	date_created: number;
	userNickname: string;
	like: number;
	dislike: number;
	rating: number;
	avatar: string;
}