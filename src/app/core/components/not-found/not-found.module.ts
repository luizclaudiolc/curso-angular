import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';


import { NotFoundComponent } from './not-found.component';

const components = [NotFoundComponent];
const matModules = [MatCardModule, MatButtonModule];
const angularModules = [CommonModule, RouterLink];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
})
export class NotFoundModule {}
