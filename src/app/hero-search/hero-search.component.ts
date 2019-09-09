import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heros$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heros$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeros(term)),
    );
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
