import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pieza46-a',
  templateUrl: './pieza46-a.component.html',
  styleUrls: ['./pieza46-a.component.css']
})
export class Pieza46AComponent {
      @Input() color!: string;
  @Input() mensaje!: string;


}
