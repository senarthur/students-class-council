import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateEdit } from './student-create-edit';

describe('StudentCreate', () => {
  let component: StudentCreateEdit;
  let fixture: ComponentFixture<StudentCreateEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCreateEdit]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentCreateEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create and edit', () => {
    expect(component).toBeTruthy();
  });
});
