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
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messegeService.add(hero.name);
    return of(hero);
  }
}
