import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() user = new EventEmitter<string>();
  loginForm = {
    email: '',
    password: '',
  };
  userEmail: string = '';
  submitLogin() {
    if (this.loginForm.email == '' || this.loginForm.password == '') {
      alert('please complete the form before logging in');
    } else {
      alert('Form Submitted');
      this.userEmail = this.loginForm.email;
      this.user.emit(this.userEmail);
      this.loginForm = {
        email: '',
        password: '',
      };
    }
  }
}
