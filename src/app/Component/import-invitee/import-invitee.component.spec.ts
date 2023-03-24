import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInviteeComponent } from './import-invitee.component';

describe('ImportInviteeComponent', () => {
  let component: ImportInviteeComponent;
  let fixture: ComponentFixture<ImportInviteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportInviteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
