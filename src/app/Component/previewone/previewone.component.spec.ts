import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewoneComponent } from './previewone.component';

describe('PreviewoneComponent', () => {
  let component: PreviewoneComponent;
  let fixture: ComponentFixture<PreviewoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
