import { Component, OnInit } from '@angular/core';
import { Pieza47Service } from '../services/pieza47.service';

@Component({
  selector: 'app-pieza47-p',
  templateUrl: './pieza47-p.component.html',
  styleUrls: ['./pieza47-p.component.css']
})
export class Pieza47PComponent implements OnInit {

   post : any;
  titulosColumnas = ['código de usuario', 'código de post', 'titulo', 'descripción'];
  constructor(private postblogService: Pieza47Service) { }

  ngOnInit() {
    this.postblogService.retornar()
      .subscribe(result => this.post = result)
  }

}
