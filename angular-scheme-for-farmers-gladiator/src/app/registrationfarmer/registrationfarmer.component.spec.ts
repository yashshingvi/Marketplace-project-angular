import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfarmerComponent } from './registrationfarmer.component';

describe('RegistrationfarmerComponent', () => {
  let component: RegistrationfarmerComponent;
  let fixture: ComponentFixture<RegistrationfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationfarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
