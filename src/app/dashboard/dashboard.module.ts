import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const components = [DashboardComponent];
const matModules = [MatCardModule, FlexLayoutModule, MatTooltipModule];
const angularModules = [CommonModule, DashboardRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...matModules, ...angularModules],
})
export class DashboardModule {}
