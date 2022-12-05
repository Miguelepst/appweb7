import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidacionesPropias } from './modelos/validaciones-propias';

@Component({
  selector: 'app-pieza62',
  templateUrl: './pieza62.component.html',
  styleUrls: ['./pieza62.component.css']
})
export class Pieza62Component {
   formularioContacto = new FormGroup({
    numero: new FormControl('', [ValidacionesPropias.multiplo5])
  });

  submit() {
    alert('dato correcto');
  }

}
