import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules],
})
export class MaterialModule {}
