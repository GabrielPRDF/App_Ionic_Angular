import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AbountPageRoutingModule} from './abount-routing.module';
import { HomePageModule } from '../home.module';
import {AbountPage} from "./abount.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    AbountPageRoutingModule
  ],
  declarations: [AbountPage]
})
export class AbountPageModule {}
