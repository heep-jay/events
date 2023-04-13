import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementinviteComponent } from './engagementinvite.component';

describe('EngagementinviteComponent', () => {
  let component: EngagementinviteComponent;
  let fixture: ComponentFixture<EngagementinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementinviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
