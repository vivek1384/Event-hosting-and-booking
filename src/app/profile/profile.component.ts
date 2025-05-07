import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../service.service';
import { Ticket, User, Event } from '../app.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
    setTimeout(() => {
      this.getEvent();
      this.bookedTicket();
    }, 100);
  }

  service = inject(ServiceService);

  user: User = new User();
  eventList: Event[] = [];
  ticketList: Ticket[] = [];
  ticketListbyEvent: Ticket[] = [];
  popup = false;

  getUser() {
    this.service.getUser(localStorage.getItem('userid')).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  getEvent() {
    this.service.getEvent(this.user.id).subscribe((res) => {
      if (res) {
        this.eventList = res;
        // console.log(this.eventList);
      }
    });
  }
  bookedTicket() {
    this.service.bookedTicket(this.user.id).subscribe((res) => {
      if (res) {
        this.ticketList = res;
        // console.log(this.ticketList);
      }
    });
  }
  getTicketbyEventid(id: any) {
    this.popup = true;
    window.scrollTo(0, 0)
    this.service.getTicketbyEventid(id).subscribe((res) => {
      if (res) {
        this.ticketListbyEvent = res;
        console.log(this.ticketListbyEvent);
      }
    });
  }

  close() {
    this.popup = false;
    this.ticketListbyEvent = [];
  }
}
