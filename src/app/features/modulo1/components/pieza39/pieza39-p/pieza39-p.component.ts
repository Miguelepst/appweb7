import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-pieza39-p',
  templateUrl: './pieza39-p.component.html',
  styleUrls: ['./pieza39-p.component.css']
})
export class Pieza39PComponent implements OnInit {
  //usuarios: any[] = [];
  usuario: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recuperarPersona();

  }
  recargar() {
    this.recuperarPersona();
  }
  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe(
        resultado =>
          this.usuario = resultado
      )
  }

  /* 
    consultar() {
      return this.usuarioS.retornar()
        .subscribe(
          (resultado: any) => {
            this.usuarios.push(resultado);
          }
        )
  
    }
   */



}
