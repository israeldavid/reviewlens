import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleobjetivosPage } from './teleobjetivos.page';

const routes: Routes = [
  {
    path: '',
    component: TeleobjetivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeleobjetivosPageRoutingModule {}
