import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  icon1 = faBars;
  icon2 = faXmark;

  openMenu = false;
  router = inject(Router);
  opneColose() {
    this.openMenu = !this.openMenu;
  }

  logout() {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      localStorage.removeItem('userid');
      this.router.navigate(['/login']);
    }
  }
}
