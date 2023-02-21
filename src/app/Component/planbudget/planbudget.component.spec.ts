import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbudgetComponent } from './planbudget.component';

describe('PlanbudgetComponent', () => {
  let component: PlanbudgetComponent;
  let fixture: ComponentFixture<PlanbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanbudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
