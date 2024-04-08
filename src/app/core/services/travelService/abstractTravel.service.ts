import { HttpClient } from "@angular/common/http";
import { ITravel, ITravelFilters } from "../../interfaces/travel";
import { BaseService } from "../baseService.service";
import { ApiAbstract } from "../apiAbstract.service";
import { Injectable, inject } from "@angular/core";


export abstract class TravelService extends BaseService<ITravel,ITravelFilters> {

    abstract saveATravel(id:string):boolean

    abstract arquiveTravel(id:string):boolean
}