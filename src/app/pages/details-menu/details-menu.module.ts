import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMenuPageRoutingModule } from './details-menu-routing.module';

import { DetailsMenuPage } from './details-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMenuPageRoutingModule
  ],
  declarations: [DetailsMenuPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsMenuPageModule {}
