import { Boton } from './../boton.interface';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() botonEntrante: Boton;
  @Output() salida = new EventEmitter<number>();

  constructor() { 
    this.botonEntrante = 
    {
      color: "oro",
      vecesClickeado: 0,
    }
  }

  ngOnInit(): void {
  }

  botonPrecionado(): void{
    this.botonEntrante.vecesClickeado++;
    this.salida.emit(this.botonEntrante.vecesClickeado);
  }
}
