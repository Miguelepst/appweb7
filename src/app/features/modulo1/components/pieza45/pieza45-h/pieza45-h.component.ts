import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pieza45-h',
  templateUrl: './pieza45-h.component.html',
  styleUrls: ['./pieza45-h.component.css']
})
export class Pieza45HComponent {

    @Input() opciones!: string[];
  @Input() colorfondo!: string;
  @Output() presionopcion = new EventEmitter();

  constructor() { }  

  ngOnInit(): void {
  }

  presion(i: number): void {
    this.presionopcion.emit(i);
  }

}
