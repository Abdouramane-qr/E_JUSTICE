import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMenuPage } from './details-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMenuPageRoutingModule {}
