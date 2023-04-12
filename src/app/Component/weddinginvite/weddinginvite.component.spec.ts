import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddinginviteComponent } from './weddinginvite.component';

describe('WeddinginviteComponent', () => {
  let component: WeddinginviteComponent;
  let fixture: ComponentFixture<WeddinginviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddinginviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddinginviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
