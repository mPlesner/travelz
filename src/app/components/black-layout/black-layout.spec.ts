import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackLayout } from './black-layout';

describe('BlackLayout', () => {
  let component: BlackLayout;
  let fixture: ComponentFixture<BlackLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
