import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilefarmerComponent } from './editprofilefarmer.component';

describe('EditprofilefarmerComponent', () => {
  let component: EditprofilefarmerComponent;
  let fixture: ComponentFixture<EditprofilefarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilefarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilefarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
