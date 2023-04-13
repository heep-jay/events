import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayinviteComponent } from './birthdayinvite.component';

describe('BirthdayinviteComponent', () => {
  let component: BirthdayinviteComponent;
  let fixture: ComponentFixture<BirthdayinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayinviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
