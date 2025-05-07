import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'event';
}

export class User {
  id: any;
  name: string;
  password: string;
  email: string;
  constructor() {
    this.id = undefined;
    this.name = '';
    this.password = '';
    this.email = '';
  }
}

export class Event {
  id: any;
  name: string;
  iLnik: string;
  date: Date;
  hostId: any;
  hostname: string;
  category: string;
  time: string;
  amPm: string;
  location: string;
  desc: string;
  totalTicket: number;
  avalTicket: number;
  bookedTicket: number;

  constructor() {
    this.id = undefined;
    this.name = '';
    this.iLnik = '';
    this.date = new Date();
    this.hostname = '';
    this.category = '';
    this.time = '';
    this.amPm = '';
    this.location = '';
    this.desc = '';
    this.totalTicket = 0;
    this.avalTicket = 0;
    this.bookedTicket = 0;
  }
}

export class Ticket {
  id: any;
  eventName: string;
  eventId: string;
  userName: string;
  userId: any;
  ticket: number;
  constructor() {
    this.id = undefined;
    this.eventName = '';
    this.eventId = '';
    this.userName = '';
    this.userId = '';
    this.ticket = 1;
  }
}
