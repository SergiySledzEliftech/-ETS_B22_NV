export class UpdateStatisticsDto{
	readonly date:number;
	readonly users:Array<number>;
	readonly itemsCreated:Array<number>;
	readonly itemsRented:Array<number>;
}