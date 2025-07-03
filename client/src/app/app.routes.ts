import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard], // Apply authGuard to all routes below
    children: [
      { path: 'members/:id', component: MemberListComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
    ],
  },
  {
    path: 'members',
    component: MemberListComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' }, // Wildcard route for a 404 page,
];
