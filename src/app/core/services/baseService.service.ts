import { HttpClient } from '@angular/common/http';

export abstract class BaseService<T,Return,Post> {
    
    private route:string = ""
    
    constructor(http:HttpClient){
        
    }

    protected addRoute(route:string){
        this.route = route;
    }

    get(id:string) : Return{
        return  "" as Return
    }

    list(filters:T) : Return[]{
        return  []
    }

    post(filters:Post) {

    }

    delete(id:string){

    }


         
}