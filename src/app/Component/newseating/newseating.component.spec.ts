import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseatingComponent } from './newseating.component';

describe('NewseatingComponent', () => {
  let component: NewseatingComponent;
  let fixture: ComponentFixture<NewseatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewseatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewseatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
