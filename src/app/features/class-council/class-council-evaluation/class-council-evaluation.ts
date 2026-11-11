import { Component, inject } from '@angular/core';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { Header } from '../../../shared/header/header';
import { BaseCard } from '../../../shared/base-card/base-card';
import { StudentService } from '../../service/student-service';
import { Button } from '../../../shared/button/button';
import { Table } from '../../../shared/table/table';
import { ProgressBar } from '../../../shared/progress-bar/progress-bar';

@Component({
  selector: 'app-class-council-evaluation',
  imports: [
    Sidebar,
    Header,
    BaseCard,
    Button,
    Table,
    ProgressBar
  ],
  templateUrl: './class-council-evaluation.html',
  styleUrl: './class-council-evaluation.scss',
})
export class ClassCouncilEvaluation {

  private studentService = inject(StudentService);

  students = this.studentService.getStudentById(1);

}
