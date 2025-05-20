import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() page = new EventEmitter<string>();
  @Input() userEmail = '';
  imageSrc = './assets/IIH_Logo.png';

  directToPage(pageName: string) {
    this.page.emit(pageName);
    console.log(`${pageName} in directToPage() sidebar`);
  }
}
