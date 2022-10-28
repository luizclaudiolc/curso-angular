import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messegeService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messegeService.add('HeroService: fetched heroes');
    return heroes;
  }
}
