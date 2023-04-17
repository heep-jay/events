import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayDupComponent } from './birthday-dup.component';

describe('BirthdayDupComponent', () => {
  let component: BirthdayDupComponent;
  let fixture: ComponentFixture<BirthdayDupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayDupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayDupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
