import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksSectionComponent } from './thanks-section.component';

describe('ThanksSectionComponent', () => {
  let component: ThanksSectionComponent;
  let fixture: ComponentFixture<ThanksSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanksSectionComponent]
    });
    fixture = TestBed.createComponent(ThanksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
