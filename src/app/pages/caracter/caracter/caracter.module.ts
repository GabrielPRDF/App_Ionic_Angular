import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracterPageRoutingModule } from './caracter-routing.module';

import { CaracterPage } from './caracter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracterPageRoutingModule
  ],
  declarations: [CaracterPage]
})
export class CaracterPageModule {}
