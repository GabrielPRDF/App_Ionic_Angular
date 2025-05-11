import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EpisodesPage } from './episodes.page';
import { HomePageModule } from '../home.module';
import {EpisodesPageRoutingModule} from "./episodes-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    EpisodesPageRoutingModule
  ],
  declarations: [EpisodesPage]
})
export class EpisodesPageModule {}
