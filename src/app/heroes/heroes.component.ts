import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
