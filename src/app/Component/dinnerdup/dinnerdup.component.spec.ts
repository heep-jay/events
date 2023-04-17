import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerdupComponent } from './dinnerdup.component';

describe('DinnerdupComponent', () => {
  let component: DinnerdupComponent;
  let fixture: ComponentFixture<DinnerdupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerdupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerdupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
