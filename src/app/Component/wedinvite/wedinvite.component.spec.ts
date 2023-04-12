import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedinviteComponent } from './wedinvite.component';

describe('WedinviteComponent', () => {
  let component: WedinviteComponent;
  let fixture: ComponentFixture<WedinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedinviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
