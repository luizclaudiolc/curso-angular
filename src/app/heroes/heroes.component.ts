import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IHero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: IHero;
  heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
    private messegeService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(
        tap({
          next: (heroes) => {
            this.heroes = heroes;
          },
        })
      )
      .subscribe();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messegeService.add(`HeroComponent: seleted hero id: ${hero.id}`)
  }
}
