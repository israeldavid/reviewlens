import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelecortoPageRoutingModule } from './telecorto-routing.module';

import { TelecortoPage } from './telecorto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelecortoPageRoutingModule
  ],
  declarations: [TelecortoPage]
})
export class TelecortoPageModule {}
