import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../hero.model';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
  @Input() hero?: IHero;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
