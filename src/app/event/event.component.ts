import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Event, Ticket } from '../app.component';
import { ServiceService } from '../service.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [HeaderComponent, DatePipe, FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent implements OnInit {
  service = inject(ServiceService);

  private readonly newProperty = 'eventid';

  ngOnInit(): void {
    this.getEevnt();
  }

  event: Event = new Event();
  id = localStorage.getItem(this.newProperty);
  ticketNumber = 1;
  ticket: Ticket = new Ticket();

  getEevnt() {
    this.service.getSingleEvent(this.id).subscribe((res) => {
      if (res) {
        this.event = res;
      }
    });
  }

  increaseF() {
    if (this.ticketNumber < 10) {
      this.ticketNumber++;
    }
  }
  decreaseF() {
    if (this.ticketNumber > 1) {
      this.ticketNumber--;
    }
  }

  bookTicket() {
    debugger
    this.ticket.ticket = this.ticketNumber;
    this.service.bookTicket(this.ticket).subscribe((res) => {
      debugger
      if (res) {
        alert(`${this.ticketNumber} Tickets booked for ${this.event.name}.`);
        this.ticket = new Ticket();
        this.ticketNumber = 1;
      }
    });
  }
}
