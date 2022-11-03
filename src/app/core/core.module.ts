import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

const components = [HeaderComponent];

const modules = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...components, ...modules],
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
