import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookingComponent } from './editbooking.component';

describe('EditbookingComponent', () => {
  let component: EditbookingComponent;
  let fixture: ComponentFixture<EditbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditbookingComponent]
    });
    fixture = TestBed.createComponent(EditbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
