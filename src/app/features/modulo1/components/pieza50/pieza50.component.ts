import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza50',
  templateUrl: './pieza50.component.html',
  styleUrls: ['./pieza50.component.css']
})
export class Pieza50Component {

  colorselect = "green";
  tamanoFuente = 30;

  cambiarColor(col:string) {
    this.colorselect = col;
  }
  agrandar() {
    this.tamanoFuente++;
  }
  achicar() {
    this.tamanoFuente--;
  }


}
