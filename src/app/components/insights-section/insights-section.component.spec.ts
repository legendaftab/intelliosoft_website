import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsSectionComponent } from './insights-section.component';

describe('InsightsSectionComponent', () => {
  let component: InsightsSectionComponent;
  let fixture: ComponentFixture<InsightsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsightsSectionComponent]
    });
    fixture = TestBed.createComponent(InsightsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
