import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { BaristaListComponent }   from './barista-list/barista-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'barista-list',
    component: BaristaListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
