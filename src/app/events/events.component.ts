import { Component, OnInit } from '@angular/core';
import {EventsService} from "./shared/events.service";
import {Event} from "./shared/event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private events: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(data => this.events = data.rows);
  }

  deleteEvent(event){
    if (confirm("Are you sure you want to delete " + event.title + "?")) {
      var index = this.events.indexOf(event);
      this.events.splice(index, 1);

      this.eventsService.deleteEvent(event.id)
        .subscribe(null,
          err => {
            alert("Could not delete event.");
            // Revert the view back to its original state
            this.events.splice(index, 0, event);
          });
    }
  }

}
