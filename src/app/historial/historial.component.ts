import { Component, OnInit } from '@angular/core';
import { Boton } from '../boton.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  elementos: Boton[];
  
  constructor() { 
    this.elementos = [];
  }

  ngOnInit(): void {
  }

}
