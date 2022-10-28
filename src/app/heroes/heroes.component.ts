import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: IHero = {
    id: 0,
    name: 'Super Choque'
  }
  selectedHero?: IHero;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  onSelect(hero: IHero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
