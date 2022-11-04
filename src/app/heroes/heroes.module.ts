import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { HeroesDetailsComponent } from './components/heroes-details/heroes-details.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

const components = [HeroesComponent, HeroesDetailsComponent];
const matModules = [MatCardModule, MatTableModule, MatButtonModule];
const angularModules = [CommonModule, HeroesRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
  exports: [...components]
})
export class HeroesModule {}
