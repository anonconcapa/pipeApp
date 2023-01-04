import {Pipe, PipeTransform } from "@angular/core"
import { __values } from "tslib";



@Pipe({
    name:'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    
    transform(value:string , enMayusculas: boolean = true){
        // if( enMayusculas ) {
        //     return value.toUpperCase();
        // } else { return value.toLocaleLowerCase()
        // }
        return (enMayusculas) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
    
}