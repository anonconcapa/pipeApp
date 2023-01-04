import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'vuela'
})


export class VuelaPipe implements PipeTransform {
    transform(volantin:boolean) {
    return (volantin)? 'vuela' : 'no vuela';
    }
    
}



