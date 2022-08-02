export interface Options {

	category?:string;
	status?:string;
	condition?:string;
	isFree?:boolean;
	sellerStatus?:string;
	isContractPrice?:boolean;
	price?: {
		$gte?: number,
		$lte?: number
	};
	rating?:{
		$lte?: number,
	};
}
