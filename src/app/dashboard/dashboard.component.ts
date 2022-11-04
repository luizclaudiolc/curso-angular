import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IHero } from 'src/app/core/models/hero.model';

import { HeroService } from '../core/services/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(
      tap({
        next: (heroes) => {
          this.heroes = heroes.slice(1,5);
        }
      })
    ).subscribe()
  }

}
