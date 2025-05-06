import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Event } from '../app.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-explore',
  imports: [HeaderComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent implements OnInit {
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.getAllService().subscribe((Res) => {
      if (Res) {
        this.allEvent = Res;
        for (let i = 0; i < this.allEvent.length; i++) {
          if (this.allEvent[i].category == 'Music & Concert') {
            this.category1.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == 'Buisness & Networking') {
            this.category2.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == 'Tech & Innovation') {
            this.category3.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == 'Festival') {
            this.category4.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == 'Mental Health') {
            this.category5.push(this.allEvent[i]);
          } else if (this.allEvent[i].category == 'Sports & Fitness') {
            this.category6.push(this.allEvent[i]);
          }
        }
      }
    });
  }

  service = inject(ServiceService);

  category1: Event[] = [];
  category2: Event[] = [];
  category3: Event[] = [];
  category4: Event[] = [];
  category5: Event[] = [];
  category6: Event[] = [];
  category7: Event[] = [];
  allEvent: Event[] = [];

  category1name = 'Music & Concert';
  category2name = 'Buisness & Networking';
  category3name = 'Tech & Innovation';
  category4name = 'Festival';
  category5name = 'Mental Health';
  category6name = 'Sports & Fitness';
}
