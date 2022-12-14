import { Boton } from './boton.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private _elementos: Boton[] = [];
  private _elementos$: BehaviorSubject<Boton[]> = new BehaviorSubject(this._elementos); 
  public elementos: Observable<Boton[]> = this._elementos$.asObservable();

  constructor() { }

  agregar(btn: Boton): void{
    this._elementos.push({...btn});
    this._elementos$.next(this._elementos);
  }
}
