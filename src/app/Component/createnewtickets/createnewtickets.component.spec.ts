import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewticketsComponent } from './createnewtickets.component';

describe('CreatenewticketsComponent', () => {
  let component: CreatenewticketsComponent;
  let fixture: ComponentFixture<CreatenewticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
