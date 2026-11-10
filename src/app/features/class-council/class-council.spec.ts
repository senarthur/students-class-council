import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCouncil } from './class-council';

describe('ClassCouncil', () => {
  let component: ClassCouncil;
  let fixture: ComponentFixture<ClassCouncil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCouncil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCouncil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
