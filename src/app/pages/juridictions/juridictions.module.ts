import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuridictionsPageRoutingModule } from './juridictions-routing.module';

import { JuridictionsPage } from './juridictions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuridictionsPageRoutingModule
  ],
  declarations: [JuridictionsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JuridictionsPageModule {}
