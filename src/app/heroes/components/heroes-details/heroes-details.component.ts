import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { IHero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';


@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
  hero?: IHero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).pipe(
      tap({
        next: (hero: IHero) => {
          this.hero = hero
        },
      })
    ).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
