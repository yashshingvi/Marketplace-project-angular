import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxbidComponent } from './maxbid.component';

describe('MaxbidComponent', () => {
  let component: MaxbidComponent;
  let fixture: ComponentFixture<MaxbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
