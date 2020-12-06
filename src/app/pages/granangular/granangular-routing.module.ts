import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GranangularPage } from './granangular.page';

const routes: Routes = [
  {
    path: '',
    component: GranangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GranangularPageRoutingModule {}
