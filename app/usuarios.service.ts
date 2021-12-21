import { Injectable } from '@angular/core';
import { usuaris } from './llista-usuari/llista-usuari.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuaris:usuaris[] = [];
  constructor() { }

  getUsuaris(){
    return this.usuaris;
  }

  setUsuaris(usuaris:usuaris[]){
    this.usuaris = usuaris;
  }
}
