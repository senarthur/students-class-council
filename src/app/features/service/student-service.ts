import { Injectable, signal } from '@angular/core';
import { IClass, IStudent, ISubject } from './iStudent';
import { classes, students, subjects } from './students_mockup.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students = signal<IStudent[]>([]);
  classes = signal<IClass[]>([]);
  subjects = signal<ISubject[]>([]);

  constructor() {
    this.students.set(students);
    this.classes.set(classes);
    this.subjects.set(subjects);
  }

  getStudentById(id: string) {
    return this.students().find(student => student.id === id);
  }

  getSummaryKPi() {
    const allPEI = this.students().filter(student => student.hasPEI === true);
    return {
      totalStudents: this.students().length,
      totalPEI: allPEI.length,
      totalClasses: this.classes().length,
      totalClassCouncilInProgress: 8,
      testConcluded: '76%',
      ocurrencesRegistered: 24,
    }

  }
}
