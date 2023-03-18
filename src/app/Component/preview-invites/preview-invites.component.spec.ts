import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInvitesComponent } from './preview-invites.component';

describe('PreviewInvitesComponent', () => {
  let component: PreviewInvitesComponent;
  let fixture: ComponentFixture<PreviewInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewInvitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
