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
  category: string;
  time: string;
  amPm: string;
  location: string;
  desc: string;

  constructor() {
    this.id = undefined;
    this.name = '';
    this.iLnik = '';
    this.date = new Date();
    this.category = '';
    this.time = '';
    this.amPm = '';
    this.location = '';
    this.desc = '';
  }
}
