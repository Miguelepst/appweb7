import { Component, ViewChild } from '@angular/core';
import { Articulo } from '../pieza36-modelos/articulo';
import { MatTableDataSource, MatTable } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { DialogoarticuloComponent } from '../pieza36-components/dialogoarticulo/dialogoarticulo.component';



@Component({
  selector: 'app-pieza36-p',
  templateUrl: './pieza36-p.component.html',
  styleUrls: ['./pieza36-p.component.css']
})
export class Pieza36PComponent {

  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  ds = new MatTableDataSource<Articulo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
      data: new Articulo(0, '', 0)
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: Articulo) {
    this.datos.push(new Articulo(art.codigo, art.descripcion, art.precio));
    this.tabla1.renderRows();
  }

}
