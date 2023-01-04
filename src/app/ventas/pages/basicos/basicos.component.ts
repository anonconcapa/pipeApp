import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'fernando';
  nombreUpper:string = 'FERNANDO';
  nombreCompleto:string = 'fErNando herRera';

  fecha:Date = new Date(); //el día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
