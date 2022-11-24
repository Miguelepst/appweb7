import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza26-padre',
  templateUrl: './pieza26-padre.component.html',
  styleUrls: ['./pieza26-padre.component.css']
})
export class Pieza26PadreComponent {
  valor1!: number;
  valor2!: number;
  resultado!: number;
  operacionSeleccionada: string = 'Suma';
  tipoDeOperaciones: string[] = [
    'Suma',
    'Resta',
    'Multiplicacion',
    'Division',
  ];

  operar() {
    switch (this.operacionSeleccionada) {
      case 'Suma': this.resultado = this.valor1 + this.valor2;
        break;
      case 'Resta': this.resultado = this.valor1 - this.valor2;
        break;
      case 'Multiplicacion': this.resultado = this.valor1 * this.valor2;
        break;
      case 'Division': this.resultado = this.valor1 / this.valor2;
        break;

    }

  }


}
