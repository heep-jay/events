import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneventComponent } from './planevent.component';

describe('PlaneventComponent', () => {
  let component: PlaneventComponent;
  let fixture: ComponentFixture<PlaneventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
