import { AfterViewInit, Component } from '@angular/core';
import { UniversitiesService } from '../../../services/universities.service';
import { University } from '../../../models/University';

@Component({
  selector: 'app-get-universities',
  imports: [],
  templateUrl: './get-universities.component.html',
  styleUrl: './get-universities.component.scss',
})
export class GetUniversitiesComponent implements AfterViewInit {
  unis: University[] = [];
  isLoaded = false;
  constructor(public s: UniversitiesService) {}
  ngAfterViewInit() {
    this.s.getUni().subscribe({
      next: (value) => {
        this.unis = value;
        this.isLoaded = true;
      },
      error: (er) => {
        console.log(er);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
