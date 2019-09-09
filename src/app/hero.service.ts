import { Injectable } from '@angular/core';
import {HEROS} from './mock-heroes';
import {Hero} from './heroes/hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }
  getHeroes(): Observable<Hero[]> {
    return of(HEROS);
  }
}
