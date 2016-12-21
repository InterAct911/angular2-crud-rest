import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventsService {

    private endpoint_baseurl: string = "http://jeff5k:3012/api/app/";
    private get_schedule_url: string = "get_schedule";
    private get_event_url:    string = "get_event";
    private delete_event_url:    string = "delete_event";
    private create_event_url: string = "create_event";
    private param_api_key:    string = "/v1?api_key=3fafb0b74a7dec0e939d1c9ba8f08f68";
    private param_id:         string = "id";

  constructor(private http: Http) { }

  getEvents(){
    return this.http.get(this.getBaseUrl(this.get_schedule_url))
      .map(res => res.json());
  }

  getEvent(id){
    return this.http.get(this.getBaseUrlParam(this.get_event_url, this.param_id, id))
      .map(res => res.json());
  }

  addEvent(event){
      event.enabled = 1;
      event.target = 'allgrp';
      event.plugin = 'testplug';
      event.max_children = 1;
      event.catch_up = 1;
      event.params = {
          "action": "Success",
          "duration": "15",
          "progress": 1,
          "secret": "Will not be shown in Event UI"
      };

      event.timing = {
          hours: [event.tmphours],
          minutes: [0]
      };

    console.log(JSON.stringify(event));
    return this.http.post(this.getBaseUrl(this.create_event_url), JSON.stringify(event))
      .map(res => res.json());
  }

  // updateEvent(event){
  //   return this.http.put(this.getEventUrl(event.id), JSON.stringify(event))
  //     .map(res => res.json());
  // }

  deleteEvent(id){
    var data = {
        "id": id
    };

    return this.http.post(this.getBaseUrl(this.delete_event_url), data)
      .map(res => res.json());
  }

  private getBaseUrl(method: string) {
      return this.endpoint_baseurl + method + this.param_api_key;
  }

  private getBaseUrlParam(method: string, paramName: string, paramValue: string) {
    return this.getBaseUrl(method) + '&' + paramName + '=' + paramValue;
  }

}
