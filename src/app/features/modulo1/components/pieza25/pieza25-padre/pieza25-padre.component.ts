import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza25-padre',
  templateUrl: './pieza25-padre.component.html',
  styleUrls: ['./pieza25-padre.component.css']
})
export class Pieza25PadreComponent {
  valor1 = 0;
  valor2 = 0;
  resultado = 0;

  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }

}
