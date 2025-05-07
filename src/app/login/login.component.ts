import { Component, inject } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLogin = true;
  service = inject(ServiceService);

  user: User = new User();

  isSignup() {
    this.isLogin = !this.isLogin;
  }

  onSignup() {
    this.service.signUp(this.user).subscribe((res) => {
      if (res) {
        this.service
          .login(this.user.email, this.user.password)
          .subscribe((result) => {
            if (result.length == 1) {
              alert('Sign up success.');
              localStorage.setItem('userid', result[0].id);
            }
          });
      }
    });
  }

  login() {
    this.service
      .login(this.user.email, this.user.password)
      .subscribe((result) => {
        if (result.length == 1) {
          alert('Log In success.');
          localStorage.setItem('userid', result[0].id);
        } else {
          alert('Email or password is incorrect.');
        }
      });
  }
}
