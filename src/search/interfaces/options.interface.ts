export interface Options {
	category?:string;
	status?:string;
	condition?:string;
	isFree?:boolean;
	price?: {
		$gte?: number,
		$lte?: number
	};
	lease_term?:{
		$gte: number,
	};
	rating?:{
		$gte: number,
	};
}
