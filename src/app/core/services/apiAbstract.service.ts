export abstract class ApiAbstract{
    abstract get(url:string,filters:any[]):Promise<any>

    abstract post(url:string,filters:any[]):Promise<any>

    abstract put(url:string,filters:any[]):Promise<any>

    abstract delete(url:string,filters:any[]):Promise<any>
}