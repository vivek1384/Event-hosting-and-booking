import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event, Ticket, User } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/';

  addEvent(d: Event) {
    return this.http.post(`${this.url}event`, d);
  }
  getAllService() {
    return this.http.get<Event[]>(`${this.url}event`);
  }
  getSingleEvent(i: any) {
    return this.http.get<Event>(`${this.url}event/${i}`);
  }
  bookTicket(d: Ticket) {
    return this.http.post(`${this.url}ticket`, d);
  }
  signUp(d: User) {
    return this.http.post(`${this.url}user`, d);
  }
  login(e: string, p: string) {
    return this.http.get<User[]>(`${this.url}user?email=${e}&password=${p}`);
  }
  getUser(id: any) {
    return this.http.get<User>(`${this.url}user/${id}`);
  }
  editEvent(id: any, d: Event) {
    return this.http.put(`${this.url}event/${id}`, d);
  }

  getEvent(id: any) {
    return this.http.get<Event[]>(`${this.url}event?hostId=${id}`);
  }
  bookedTicket(id: any) {
    return this.http.get<Ticket[]>(`${this.url}ticket?userId=${id}`);
  }
  getTicketbyEventid(id: any) {
    return this.http.get<Ticket[]>(`${this.url}ticket?eventId=${id}`);
  }
}
