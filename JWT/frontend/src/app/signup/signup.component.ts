import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  onSubmit(email: string, password: string) {
    const user: User = {
      email,
      password,
    };

    this.authService.signup(user);
  }
}
