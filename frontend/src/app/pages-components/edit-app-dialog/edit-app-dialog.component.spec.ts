import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppDialogComponent } from './edit-app-dialog.component';

describe('EditAppDialogComponent', () => {
  let component: EditAppDialogComponent;
  let fixture: ComponentFixture<EditAppDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAppDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
