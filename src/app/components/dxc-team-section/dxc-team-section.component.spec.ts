import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTeamSectionComponent } from './dxc-team-section.component';

describe('DxcTeamSectionComponent', () => {
  let component: DxcTeamSectionComponent;
  let fixture: ComponentFixture<DxcTeamSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DxcTeamSectionComponent]
    });
    fixture = TestBed.createComponent(DxcTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
