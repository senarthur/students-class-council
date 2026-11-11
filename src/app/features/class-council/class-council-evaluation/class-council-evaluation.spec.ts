import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCouncilEvaluation } from './class-council-evaluation';

describe('ClassCouncilEvaluation', () => {
  let component: ClassCouncilEvaluation;
  let fixture: ComponentFixture<ClassCouncilEvaluation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCouncilEvaluation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCouncilEvaluation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
