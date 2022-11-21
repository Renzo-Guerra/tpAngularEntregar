import { ComunicacionService } from './../comunicacion.service';
import { Component, OnInit } from '@angular/core';
import { Boton } from '../boton.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  botones: Boton[] = [];

  constructor(private dataEntrante: ComunicacionService) { 
    /**
     * Profe me canse de intentar de que ande el observable 
     * (En el sentido de que cuando cambio de ruta, la info del historial persista), segui el video a la par, e incluso intenté 
     * agregando Observable (como está en la filmina) y tampoco persiste, será que habran actualizado Angular?
     */
    this.dataEntrante.elementos.subscribe(e => this.botones = e);
  }

  ngOnInit(): void {
  }

}
