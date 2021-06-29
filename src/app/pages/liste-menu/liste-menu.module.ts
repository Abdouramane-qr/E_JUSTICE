import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMenuPageRoutingModule } from './liste-menu-routing.module';

import { ListeMenuPage } from './liste-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMenuPageRoutingModule
  ],
  declarations: [ListeMenuPage]
})
export class ListeMenuPageModule {}
