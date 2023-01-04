import { Component } from '@angular/core';
import { Color, Heroe } from '../../Interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
cambio: boolean = false;

heroes: Heroe[] = [
  {
  nombre:'Superman',
  vuela:true,
  color: Color.azul
},
{
  nombre:'Batman',
  vuela:false,
  color: Color.negro
},
{
  nombre:'Robin',
  vuela:false,
  color: Color.verde
},
{
  nombre:'Deredevil',
  vuela:false,
  color:Color.rojo
},
{
  nombre:'LinternaVerde',
  vuela:true,
  color:Color.verde
}
];

orderPor:string = '';

cambiar () {
  return (this.cambio) ? this.cambio = false : this.cambio = true  
}

cambiarOrden(valorant:string){
  return this.orderPor = valorant;
}

}
