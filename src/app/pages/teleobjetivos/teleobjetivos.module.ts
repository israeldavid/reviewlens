import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeleobjetivosPageRoutingModule } from './teleobjetivos-routing.module';

import { TeleobjetivosPage } from './teleobjetivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeleobjetivosPageRoutingModule
  ],
  declarations: [TeleobjetivosPage]
})
export class TeleobjetivosPageModule {}
