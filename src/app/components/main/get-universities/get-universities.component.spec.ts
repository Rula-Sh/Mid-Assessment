import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUniversitiesComponent } from './get-universities.component';

describe('GetUniversitiesComponent', () => {
  let component: GetUniversitiesComponent;
  let fixture: ComponentFixture<GetUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUniversitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
