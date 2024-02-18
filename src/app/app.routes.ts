import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    title: 'Users'
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    title: 'User Details'
  },
];
