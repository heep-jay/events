import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTicketsComponent } from './add-new-tickets.component';

describe('AddNewTicketsComponent', () => {
  let component: AddNewTicketsComponent;
  let fixture: ComponentFixture<AddNewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
