import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDeetComponent } from './food-deet.component';

describe('FoodDeetComponent', () => {
  let component: FoodDeetComponent;
  let fixture: ComponentFixture<FoodDeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
