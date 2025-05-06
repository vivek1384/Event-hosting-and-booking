import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventPlanComponent } from './event-plan/event-plan.component';
import { ExploreComponent } from './explore/explore.component';
import { NewComponent } from './new/new.component';
import { EventComponent } from './event/event.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
];
