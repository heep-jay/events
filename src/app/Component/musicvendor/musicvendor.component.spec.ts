import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicvendorComponent } from './musicvendor.component';

describe('MusicvendorComponent', () => {
  let component: MusicvendorComponent;
  let fixture: ComponentFixture<MusicvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
