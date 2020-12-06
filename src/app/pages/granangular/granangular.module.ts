import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GranangularPageRoutingModule } from './granangular-routing.module';

import { GranangularPage } from './granangular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GranangularPageRoutingModule
  ],
  declarations: [GranangularPage]
})
export class GranangularPageModule {}
