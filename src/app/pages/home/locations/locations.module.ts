import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationsPage } from './locations.page';
import { HomePageModule } from '../home.module';
import {LocationsPageRoutingModule} from "./locations-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    LocationsPageRoutingModule
  ],
  declarations: [LocationsPage]
})
export class LocationsPageModule {}
