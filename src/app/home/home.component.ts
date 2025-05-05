import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";
import { CategoryComponent } from "../category/category.component";
import { SponsorComponent } from "../sponsor/sponsor.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, UpcomingComponent, CategoryComponent, SponsorComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
