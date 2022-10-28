import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: IHero;
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
