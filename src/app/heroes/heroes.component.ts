import { Component, OnInit } from '@angular/core';
import {HEROS} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros = HEROS;
  constructor() { }

  ngOnInit() {
  }

}
