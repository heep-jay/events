import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewnewComponent } from './reviewnew.component';

describe('ReviewnewComponent', () => {
  let component: ReviewnewComponent;
  let fixture: ComponentFixture<ReviewnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
