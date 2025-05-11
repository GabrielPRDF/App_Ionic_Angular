import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationPage } from './location.page';
import { HomePageModule } from '../home.module';
import {LocationPageRoutingModule} from "./location-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    LocationPageRoutingModule
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
