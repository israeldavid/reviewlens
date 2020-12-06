import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltragranangularPageRoutingModule } from './ultragranangular-routing.module';

import { UltragranangularPage } from './ultragranangular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltragranangularPageRoutingModule
  ],
  declarations: [UltragranangularPage]
})
export class UltragranangularPageModule {}
