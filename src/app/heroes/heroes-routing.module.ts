import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailsComponent } from './components/heroes-details/heroes-details.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: ':id',
    component: HeroesDetailsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
