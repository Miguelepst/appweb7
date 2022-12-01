import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-pieza48',
  templateUrl: './pieza48.component.html',
  styleUrls: ['./pieza48.component.css']
})
export class Pieza48Component {

  usuario:any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe(result => this.usuario = result);
  }

  presion() {
    this.recuperarPersona();
  }

}
