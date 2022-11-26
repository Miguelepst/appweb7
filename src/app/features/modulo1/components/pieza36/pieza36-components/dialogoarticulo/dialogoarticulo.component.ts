import { Component, OnInit, Inject } from '@angular/core';
import { Articulo } from '../../pieza36-modelos/articulo';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'



@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogoarticulo.component.html',
  styleUrls: ['./dialogoarticulo.component.css']
})
export class DialogoarticuloComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Articulo) { }

  ngOnInit() { }

  cancelar() {
    this.dialogRef.close();
  }



}
