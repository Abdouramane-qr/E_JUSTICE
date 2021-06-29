import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuridictionsPage } from './juridictions.page';

const routes: Routes = [
  {
    path: '',
    component: JuridictionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuridictionsPageRoutingModule {}
