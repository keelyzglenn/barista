import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { BaristaListComponent }   from './barista-list/barista-list.component';
import { UserProfileComponent }   from './user-profile/user-profile.component';

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
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
