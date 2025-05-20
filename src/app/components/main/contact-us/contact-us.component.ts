import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  contact = {
    username: '',
    title: '',
    body: '',
  };

  submitForm() {
    if (
      this.contact.username == '' ||
      this.contact.title == '' ||
      this.contact.body == ''
    ) {
      alert('please complete the form before sending');
    } else {
      alert('Form Submitted');
      this.contact = {
        username: '',
        title: '',
        body: '',
      };
    }
  }
}
