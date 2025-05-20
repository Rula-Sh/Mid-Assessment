import { Component, Input } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CommonModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pageNameInApp = '';
  title = 'mid-assessment';

  // getPageName(pageN: string) {
  //   this.pageNameInApp = pageN;
  //   console.log(`${pageN} in getPageName() app`);
  // }
  isLoggedIn = false;
  getUserIfLogged(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    console.log(isLoggedIn);
  }
}

// window.location.href = './login'
