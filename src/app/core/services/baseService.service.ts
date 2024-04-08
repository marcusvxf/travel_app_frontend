import { ApiAbstract } from "./apiAbstract.service";

export abstract class BaseService<filters,Post> {

    constructor(private apiAbstract:ApiAbstract){

    }

    abstract get(id:string) : Post

    abstract list(filters:filters):Post[]

    abstract post(filters:Post):boolean

    abstract edit(filters:Post):boolean

    abstract delete(id:string):boolean

}