import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../models/University';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  constructor() {}
  http = inject(HttpClient);
  httpUri = 'http://universities.hipolabs.com/search?country=jordan';

  getUni(): Observable<University[]> {
    return this.http.get<University[]>(this.httpUri);
  }
}
