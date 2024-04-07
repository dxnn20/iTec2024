import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEndpointComponent } from './edit-endpoint.component';

describe('EditEndpointComponent', () => {
  let component: EditEndpointComponent;
  let fixture: ComponentFixture<EditEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEndpointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
