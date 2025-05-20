import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  userEmail: string = '';
  createUser() {
    if (
      this.user.username == '' ||
      this.user.email == '' ||
      this.user.password == '' ||
      this.user.confirmPassword == ''
    ) {
      alert('please complete the form before logging in');
    } else {
      alert('Form Submitted');
      this.userEmail = this.user.email;
      // this.user.emit(this.userEmail);
      this.user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    }
  }
}