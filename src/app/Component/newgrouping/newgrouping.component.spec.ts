import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgroupingComponent } from './newgrouping.component';

describe('NewgroupingComponent', () => {
  let component: NewgroupingComponent;
  let fixture: ComponentFixture<NewgroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
