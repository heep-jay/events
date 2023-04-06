import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitetemplateComponent } from './invitetemplate.component';

describe('InvitetemplateComponent', () => {
  let component: InvitetemplateComponent;
  let fixture: ComponentFixture<InvitetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitetemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
