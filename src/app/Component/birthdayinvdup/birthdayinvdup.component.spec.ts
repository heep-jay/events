import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayinvdupComponent } from './birthdayinvdup.component';

describe('BirthdayinvdupComponent', () => {
  let component: BirthdayinvdupComponent;
  let fixture: ComponentFixture<BirthdayinvdupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayinvdupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayinvdupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
