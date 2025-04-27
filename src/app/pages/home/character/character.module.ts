import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterPage } from './character.page';
import { CharacterPageRoutingModule } from './character-routing.module';
import { HomePageModule } from '../home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageModule,
    CharacterPageRoutingModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
