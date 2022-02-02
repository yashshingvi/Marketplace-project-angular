import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetActiveSellRequestComponent } from './get-active-sell-request.component';

describe('GetActiveSellRequestComponent', () => {
  let component: GetActiveSellRequestComponent;
  let fixture: ComponentFixture<GetActiveSellRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetActiveSellRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetActiveSellRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
