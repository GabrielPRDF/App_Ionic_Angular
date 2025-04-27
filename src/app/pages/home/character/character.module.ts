import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterPage } from './character.page';
import { CharacterPageRoutingModule } from './character-routing.module';
import { HomePageRoutingModule } from '../home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    CharacterPageRoutingModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
