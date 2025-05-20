import { Component, Input, input, OnChanges } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUniversitiesComponent } from './get-universities/get-universities.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-main',
  imports: [
    SidebarComponent,
    CommonModule,
    MyProfileComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddUserComponent,
    GetUniversitiesComponent,
    LoginComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  // @Input() pageNameInMain = '';
  @Input() userEmail = '';
  pageNameInMain = '';
  @Input() isLoggedIn = false;
  // @Input() UserClickedLogin = false;

  getPageName(pageN: string) {
    this.pageNameInMain = pageN;
    console.log(`${pageN} in getPageName() main`);
  }

  getUserToHeader(userEmail: string) {
    this.isLoggedIn = true;
    this.userEmail = userEmail;
  }
}
