import { Component, OnInit } from '@angular/core';
import { Boton } from '../boton.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  botones: Boton[];
  titulo: string = "Lista de botones!!!";

  constructor() { 
    this.botones = [];
  }

  ngOnInit(): void {
    this.botones = [
      {
        color: "rojo",
        vecesClickeado: 0,
      },
      {
        color: "verde",
        vecesClickeado: 10,
      },
      {
        color: "amarillo",
        vecesClickeado: 4,
      },
    ]
  }

}
