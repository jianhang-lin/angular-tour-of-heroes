import { Injectable } from '@angular/core';
import {HEROS} from './mock-heroes';
import {Hero} from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROS;
  }
}
