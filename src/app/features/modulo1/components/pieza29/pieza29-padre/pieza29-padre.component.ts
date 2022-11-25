import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza29-padre',
  templateUrl: './pieza29-padre.component.html',
  styleUrls: ['./pieza29-padre.component.css']
})
export class Pieza29PadreComponent {


  slider1: number = 0;
  slider2: number = 0;
  slider3: number = 0;
  suma = 0;

  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;
    this.suma = this.slider3;
  }


}
