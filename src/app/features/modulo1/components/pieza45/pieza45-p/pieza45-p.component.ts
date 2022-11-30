import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza45-p',
  templateUrl: './pieza45-p.component.html',
  styleUrls: ['./pieza45-p.component.css']
})
export class Pieza45PComponent {

   opciones = [
    "Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"
  ];

  presion(op: number) {
    alert("Se informa que se presiono la opcion " + op);
  }



}
