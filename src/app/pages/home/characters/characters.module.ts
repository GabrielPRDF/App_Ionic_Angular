import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersPageRoutingModule } from './characters-routing.module';
import { HomePageModule } from '../home.module';
import {CharactersPage} from "./characters.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage]
})
export class CharactersPageModule {}
