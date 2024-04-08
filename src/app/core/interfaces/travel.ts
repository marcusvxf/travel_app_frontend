export interface ITravel{
    destination:IDestination
    todoList: any
    hotelDestination:IAddress
    links:any
    thingsToDoTable: any
    startDate: string
    endDate:string

}

export interface ITravelFilters {

}

interface IDestination{
    country:string
    state:string
    city:string
}

interface IAddress extends IDestination{
    complement:string
}