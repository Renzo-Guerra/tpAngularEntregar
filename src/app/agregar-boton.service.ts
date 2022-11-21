import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Boton } from './boton.interface';

@Injectable({
  providedIn: 'root'
})
export class AgregarBotonService {
  private _elementos: Boton[] = [];
  private _elementos$: BehaviorSubject<Boton[]> = new BehaviorSubject(this._elementos); 
  public elementos: Observable<Boton[]> = this._elementos$.asObservable();

  constructor() { }

  agregarBoton(btn: Boton) : void{
    
  }
}
