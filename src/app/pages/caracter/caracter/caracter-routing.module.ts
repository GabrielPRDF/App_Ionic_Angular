import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracterPage } from './caracter.page';

const routes: Routes = [
  {
    path: '',
    component: CaracterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracterPageRoutingModule {}
