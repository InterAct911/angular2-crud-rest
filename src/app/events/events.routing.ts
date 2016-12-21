import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import {EventFormComponent} from "./event-form/event-form.component";

const eventsRoutes: Routes = [
  { path: 'events', component: EventsComponent, pathMatch: 'full' },
  { path: 'events/new', component: EventFormComponent},
  { path: 'events/:id', component: EventFormComponent}
];

export const eventsRouting = RouterModule.forChild(eventsRoutes);
