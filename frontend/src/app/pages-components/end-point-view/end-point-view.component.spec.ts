import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPointViewComponent } from './end-point-view.component';

describe('EndPointViewComponent', () => {
  let component: EndPointViewComponent;
  let fixture: ComponentFixture<EndPointViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndPointViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndPointViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
