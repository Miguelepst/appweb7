import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza29-padre',
  templateUrl: './pieza29-padre.component.html',
  styleUrls: ['./pieza29-padre.component.css']
})
export class Pieza29PadreComponent {

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;


}
