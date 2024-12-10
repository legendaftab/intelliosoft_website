import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernizeTransformSectionComponent } from './modernize-transform-section.component';

describe('ModernizeTransformSectionComponent', () => {
  let component: ModernizeTransformSectionComponent;
  let fixture: ComponentFixture<ModernizeTransformSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModernizeTransformSectionComponent]
    });
    fixture = TestBed.createComponent(ModernizeTransformSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
