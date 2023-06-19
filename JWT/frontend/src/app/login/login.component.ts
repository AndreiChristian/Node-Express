import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(email: string, password: string) {
    const user: User = {
      email,
      password,
    };

    this.authService.login(user);
  }
}
