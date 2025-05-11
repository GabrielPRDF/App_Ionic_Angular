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
        loadChildren: () => import('../locations/locations.module').then(m => m.LocationsPageModule)
      },
      {
        path: 'episodes',
        loadChildren: () => import('../episodes/episodes.module').then(m => m.EpisodesPageModule)
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
