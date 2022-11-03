import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesDetailsComponent } from './components/heroes-details/heroes-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MatButton, MatButtonModule } from '@angular/material/button';

const components = [HeroesComponent, HeroesDetailsComponent];
const matModules = [MatCardModule, MatTableModule, MatButtonModule];
const angularModules = [CommonModule, HeroesRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
  exports: [...components]
})
export class HeroesModule {}
