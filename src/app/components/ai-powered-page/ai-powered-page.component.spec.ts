import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPoweredPageComponent } from './ai-powered-page.component';

describe('AiPoweredPageComponent', () => {
  let component: AiPoweredPageComponent;
  let fixture: ComponentFixture<AiPoweredPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiPoweredPageComponent]
    });
    fixture = TestBed.createComponent(AiPoweredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
