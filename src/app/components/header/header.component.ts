import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() userEmail: string = 'Guest';
  @Output() login = new EventEmitter<boolean>();
  loggedIn = true;

  logging(loggedIn: boolean) {
    this.login.emit(loggedIn);
    this.loggedIn = !this.loggedIn;
  }
}
