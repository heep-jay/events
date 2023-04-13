import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerinviteComponent } from './dinnerinvite.component';

describe('DinnerinviteComponent', () => {
  let component: DinnerinviteComponent;
  let fixture: ComponentFixture<DinnerinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerinviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
