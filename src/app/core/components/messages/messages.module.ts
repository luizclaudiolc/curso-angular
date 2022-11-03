import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { MessagesComponent } from './messages.component';

const components = [MessagesComponent];
const matModules = [MatExpansionModule, MatListModule];
const angularModules = [CommonModule];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
})
export class MessagesModule {}
