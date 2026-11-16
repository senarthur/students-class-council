import { Component, effect, inject, input, signal } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { BaseCard } from '../../../shared/base-card/base-card';
import { StudentService } from '../../service/student-service';
import { Button } from '../../../shared/button/button';
import { Table } from '../../../shared/table/table';
import { ProgressBar } from '../../../shared/progress-bar/progress-bar';
import { IClassCouncil, IStudent, ISubject } from '../../service/iStudent';
import { InputDirective } from '../../../core/directives/input-directive';
import { behaviorGrades } from '../../service/students_mockup.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-class-council-evaluation',
  imports: [
    Header,
    BaseCard,
    Button,
    Table,
    ProgressBar,
    InputDirective,
    RouterLink
  ],
  templateUrl: './class-council-evaluation.html',
  styleUrl: './class-council-evaluation.scss',
})
export class ClassCouncilEvaluation {
  private router = inject(Router);
  private studentService = inject(StudentService);

  id = input<string>();

  student = signal<IStudent | null>(null);
  behaviors = signal<IClassCouncil[]>([]);

  subjects = signal<ISubject[]>([]);
  selectedSubject = signal<ISubject>({ id: "a4175dfe-697d-436c-8430-027627377bdb", subjectName: "Português" });

  constructor() {

    effect(() => {
      const currentId = this.id();
      if (currentId) {
        this.loadStudent(currentId);
        this.loadSubjects();
      }
    })
  }

  private async loadStudent(id: string) {
    const student = this.studentService.getStudentById(id);
    if (student == undefined) this.student.set(null)
    else this.student.set(student);

    this.behaviors.set(behaviorGrades);
  }

  private async loadSubjects() {
    this.subjects = this.studentService.subjects;
  }

  selectSubject(subject: ISubject) {
    if (subject.id === this.selectedSubject()?.id) return;
    this.selectedSubject.set(subject);
  }

  goToNextStudent() {
    const id = this.id();

    if (id) {
      const students = this.studentService.students();
      const studentIndex = students.findIndex(student => student.id === this.student()?.id);

      if (studentIndex !== -1 && students[studentIndex + 1]) {
        this.router.navigate([`conselho-classe/avaliar/`, students[studentIndex + 1].id]);
      }

    }
  }

  goToPreviousStudent() {
    const id = this.id();

    if (id) {
      const students = this.studentService.students();
      const studentIndex = students.findIndex(student => student.id === this.student()?.id);

      if (studentIndex !== -1 && students[studentIndex - 1]) {
        this.router.navigate([`conselho-classe/avaliar/`, students[studentIndex - 1].id]);
      }

    }
  }

}
