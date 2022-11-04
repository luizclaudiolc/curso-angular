import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

const components = [DashboardComponent];
const matModules = [MatCardModule, FlexLayoutModule, MatTooltipModule];
const angularModules = [CommonModule, DashboardRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...matModules, ...angularModules],
})
export class DashboardModule {}
