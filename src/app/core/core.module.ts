import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';

const components = [HeaderComponent];
const angularModules = [CommonModule];
const matModules = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [...components],
  imports: [...angularModules, ...matModules],
  exports: [...components, ...matModules],
})
export class CoreModule {
  // *** Esse código serve para impedir que Coremodule seja importado em outro lugar que não seja o appModule *** //
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule)
      throw new Error(
        `CoreModule já foi carregado. Importe esse modulo em AppModule.`
      );
  }
}
