import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pieza47-a',
  templateUrl: './pieza47-a.component.html',
  styleUrls: ['./pieza47-a.component.css']
})
export class Pieza47AComponent implements OnInit {
    @Input() titulos: any;
  @Input() filas: any;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }

}
