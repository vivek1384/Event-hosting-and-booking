import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventPlanComponent } from './event-plan/event-plan.component';
import { ExploreComponent } from './explore/explore.component';
import { NewComponent } from './new/new.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'event-plan',
    component: EventPlanComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
