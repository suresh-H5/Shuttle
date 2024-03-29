import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTestComponent } from './svg-test.component';

describe('SvgTestComponent', () => {
  let component: SvgTestComponent;
  let fixture: ComponentFixture<SvgTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgTestComponent]
    });
    fixture = TestBed.createComponent(SvgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
