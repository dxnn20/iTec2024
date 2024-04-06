import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEndPointDialogComponent } from './add-end-point-dialog.component';

describe('AddEndPointDialogComponent', () => {
  let component: AddEndPointDialogComponent;
  let fixture: ComponentFixture<AddEndPointDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEndPointDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEndPointDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
