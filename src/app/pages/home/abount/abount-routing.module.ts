import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbountPage} from './abount.page';

const routes: Routes = [
  {
    path: '',
    component: AbountPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbountPageRoutingModule {}
