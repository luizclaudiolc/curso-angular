import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IHero } from 'src/app/hero.model';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];
  matHeaderRowDef = ['id', 'name'];

  constructor(
    private heroService: HeroService,
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
}
