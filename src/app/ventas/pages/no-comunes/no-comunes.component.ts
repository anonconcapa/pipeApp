import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  
  nombre:string = 'Fernando';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

clientes:string[] = ['alberto','pepe','pipo','pepo','paco','pablo','solaire','oscar'];
  
clienteMapa = {
  '=0':'No tenemos ningun cliente esperando',
  '=1':'Tenemos 1 cliente esperando',
  '=2':'Tenemos 2 clientes esperando',
  'other':'Tenemos # clientes esperando'
}

cambiarPersona(){
  this.nombre = 'Carolina';
  this.genero = 'femenino';
}

borrarCliente(){
  this.clientes.pop();
}

persona = {
  nombre:'Fernando',
  edad:35,
  direccion:'Ottawa, Canada'
}
}
