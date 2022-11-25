import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pieza33-p',
  templateUrl: './pieza33-p.component.html',
  styleUrls: ['./pieza33-p.component.css']
})
export class Pieza33PComponent {

  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }


}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}