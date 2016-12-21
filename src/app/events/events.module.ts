import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { EventsComponent } from './events.component';
import { EventsService } from './shared/events.service';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    EventsComponent,
    EventFormComponent
  ],
  exports: [
      EventsComponent
  ],
  providers: [
      EventsService
  ]
})
export class EventsModule { }
