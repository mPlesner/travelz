import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Path1Dialog } from './path-1-dialog';

describe('Path1Dialog', () => {
  let component: Path1Dialog;
  let fixture: ComponentFixture<Path1Dialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Path1Dialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Path1Dialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
