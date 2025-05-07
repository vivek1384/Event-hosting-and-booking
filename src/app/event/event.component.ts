import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Event, Ticket, User } from '../app.component';
import { ServiceService } from '../service.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';

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
    this.getUserbyId();
  }

  event: Event = new Event();
  id = localStorage.getItem(this.newProperty);
  ticketNumber = 1;
  ticket: Ticket = new Ticket();
  user: User = new User();

  getUserbyId() {
    this.service.getUser(localStorage.getItem('userid')).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  getEevnt() {
    this.service.getSingleEvent(this.id).subscribe((res) => {
      if (res) {
        this.event = res;
      }
    });
  }

  increaseF() {
    if (this.ticketNumber < this.event.avalTicket) {
      this.ticketNumber++;
    }
  }
  decreaseF() {
    if (this.ticketNumber > 1) {
      this.ticketNumber--;
    }
  }

  bookTicket() {
    debugger;
    if (this.event.hostId == localStorage.getItem('userid')) {
      alert("You can't book an event host by yourself.");
    } else {
      this.ticket.ticket = this.ticketNumber;
      this.ticket.eventId = this.event.id;
      this.ticket.eventName = this.event.name;
      this.ticket.userId = localStorage.getItem('userid');
      this.ticket.userName = this.user.name;

      if (this.event.avalTicket - this.ticketNumber >= 0) {
        this.service.bookTicket(this.ticket).subscribe((res) => {
          debugger;
          if (res) {
            this.event.avalTicket = this.event.avalTicket - this.ticket.ticket;
            this.event.bookedTicket =
              this.event.bookedTicket + this.ticket.ticket;
            this.service
              .editEvent(this.event.id, this.event)
              .subscribe((res) => {
                if (res) {
                  alert(
                    `${this.ticketNumber} Tickets booked for ${this.event.name}.`
                  );
                  this.ticket = new Ticket();
                  this.ticketNumber = 1;
                }
              });
          }
        });
      } else {
        alert("You can't book more tickets then available.");
      }
    }
  }
}
