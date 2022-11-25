import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pieza34-p',
  templateUrl: './pieza34-p.component.html',
  styleUrls: ['./pieza34-p.component.css']
})
export class Pieza34PComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  dataSource: any;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    for (let x = 1; x <= 10; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.sort = this.sort;
  }

}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}