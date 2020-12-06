import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltragranangularPage } from './ultragranangular.page';

const routes: Routes = [
  {
    path: '',
    component: UltragranangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltragranangularPageRoutingModule {}
