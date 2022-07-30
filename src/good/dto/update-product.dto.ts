export class UpdateProductDto{
	title: string;
	price: number;
	description: string;
	rating: number;
	brand: string;
	category: string;
	images: string[];
	categoryId:string;
	lease_term:number;
	lease_date:string;
	expires_at:string;
	leaser_info: {
		userId: { type: String },
		firstName: { type: String },
		lastName: { type: String },
		nickname: { type: String },
		avatar: { type: String }
	};
	status:string;
	isPrivate:boolean;
	condition:string;
	isFree:boolean;
	location:string;
	date_created:string;
}