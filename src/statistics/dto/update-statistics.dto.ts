export class UpdateStatisticsDto{
    readonly date:Date
    readonly users:Array<number>
    readonly itemsCreated:Array<number>
    readonly itemsRented:Array<number>
}