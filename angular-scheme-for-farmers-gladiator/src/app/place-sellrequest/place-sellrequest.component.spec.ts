import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSellrequestComponent } from './place-sellrequest.component';

describe('PlaceSellrequestComponent', () => {
  let component: PlaceSellrequestComponent;
  let fixture: ComponentFixture<PlaceSellrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceSellrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSellrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
