import { Component } from '@angular/core';

@Component({
  selector: 'app-pieza24-padre',
  templateUrl: './pieza24-padre.component.html',
  styleUrls: ['./pieza24-padre.component.css']
})
export class Pieza24PadreComponent {

  posiciones = [['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']];

  jugador = '0';

  presion(fila: number, columna: number) {
    if (this.posiciones[fila][columna] == '-') {
      this.posiciones[fila][columna] = this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }

  }
  reiniciar() {
    for (let f = 0; f < 3; f++) {
      for (let c = 0; c < 3; c++) {
        this.posiciones[f][c] = '-';
      }
    }
  }

  verificarGano(ficha: string) {
    if (this.posiciones[0][0] == ficha && this.posiciones[0][1] == ficha && this.posiciones[0][2] == ficha) {
      alert('Gano: ' + ficha);
    }


    if (this.posiciones[1][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[1][2] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[2][0] == ficha && this.posiciones[2][1] == ficha && this.posiciones[2][2] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][0] == ficha && this.posiciones[1][0] == ficha && this.posiciones[2][0] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][1] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][1] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][2] == ficha && this.posiciones[1][2] == ficha && this.posiciones[2][2] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][2] == ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][2] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][0] == ficha)
      alert('Gano:' + ficha);




  }

  cambiarJugador() {
    if (this.jugador == 'X') {
      this.jugador = 'O';
      return;
    }
    this.jugador = 'X';
    return;

  }


}
