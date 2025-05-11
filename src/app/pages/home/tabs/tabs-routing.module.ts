import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'abount',
        loadChildren: () => import('../abount/abount.module').then(m => m.AbountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/characters',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
