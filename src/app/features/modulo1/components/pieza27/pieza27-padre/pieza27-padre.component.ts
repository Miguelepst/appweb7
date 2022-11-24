import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza27-padre',
  templateUrl: './pieza27-padre.component.html',
  styleUrls: ['./pieza27-padre.component.css']
})
export class Pieza27PadreComponent {
  valor1!: number;
  valor2!: number;
  resultado!: string;
  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4: boolean = false;


  operar() {
    this.resultado = '';
    if (this.opcion1) {
      let ope = this.valor1 + this.valor2;
      this.resultado += `La suma es ${ope} `;
    }
    if (this.opcion2) {
      let ope = this.valor1 - this.valor2;
      this.resultado += `La resta es ${ope} `;
    }
    if (this.opcion3) {
      let ope = this.valor1 * this.valor2;
      this.resultado += `El producto es ${ope} `;
    }
    if (this.opcion4) {
      let ope = this.valor1 / this.valor2;
      this.resultado += `La division es ${ope} `;
    }
  }


}
