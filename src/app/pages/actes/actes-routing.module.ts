import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActesPage } from './actes.page';

const routes: Routes = [
  {
    path: '',
    component: ActesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActesPageRoutingModule {}
