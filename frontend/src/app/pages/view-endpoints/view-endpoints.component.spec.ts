import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEndpointsComponent } from './view-endpoints.component';

describe('ViewEndpointsComponent', () => {
  let component: ViewEndpointsComponent;
  let fixture: ComponentFixture<ViewEndpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEndpointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
