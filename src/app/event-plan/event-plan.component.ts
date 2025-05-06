import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Event } from '../app.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-event-plan',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './event-plan.component.html',
  styleUrl: './event-plan.component.css',
})
export class EventPlanComponent {
  constructor(private service: ServiceService) {}

  event: Event = new Event();

  stateList = ['Gujarat', 'Maharashtra', 'Goa'];
  cityList = [
    'Surat',
    'Rajkot',
    'Vadodara',
    'Ahmedabad',
    'Goa',
    'Mumbai',
    'Pune',
    'Nasik',
    'Nagpur',
  ];
  stateName = '';
  cityName = '';
  categoryList = [
    'Music & Concert',
    'Business & Networking',
    'Tech & Innovation',
    'Festival',
    'Mental Health',
    'Sport & Fitness',
  ];

  submit() {
    this.event.location = this.cityName + ', ' + this.stateName;
    console.log(this.event);
    this.service.addEvent(this.event).subscribe((res) => {
      if (res) {
        alert('Event added.');
        this.event = new Event();
        this.stateName = '';
        this.cityName = '';
      }
    });
  }
}

export class CityList {
  name: string;
  city: [];
  constructor() {
    this.name = '';
    this.city = [];
  }
}
