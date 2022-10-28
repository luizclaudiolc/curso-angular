import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IHero } from '../hero.model';
import { HeroService } from '../hero.service';

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
