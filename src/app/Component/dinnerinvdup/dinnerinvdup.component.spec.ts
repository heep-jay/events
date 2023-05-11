import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerinvdupComponent } from './dinnerinvdup.component';

describe('DinnerinvdupComponent', () => {
  let component: DinnerinvdupComponent;
  let fixture: ComponentFixture<DinnerinvdupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerinvdupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerinvdupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
