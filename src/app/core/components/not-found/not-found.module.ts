import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';


const components = [NotFoundComponent];
const matModules = [MatCardModule, MatButtonModule];
const angularModules = [CommonModule, NotFoundRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
})
export class NotFoundModule {}
