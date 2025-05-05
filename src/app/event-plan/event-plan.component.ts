import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-event-plan',
  imports: [HeaderComponent],
  templateUrl: './event-plan.component.html',
  styleUrl: './event-plan.component.css',
})
export class EventPlanComponent {
  cityList = ["Surat", "Mumbai", "Delhi", "Vadodara", "Goa", "Chennai", "Chandigadh"];
}
