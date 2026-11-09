import { Component, inject, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Button } from '../../shared/button/button';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { BaseCard } from '../../shared/base-card/base-card';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Table } from '../../shared/table/table';
import { StudentService } from '../service/student-service';

@Component({
  selector: 'app-students',
  imports: [
    Sidebar,
    Header,
    Button,
    BaseCard,
    KpiCard,
    Table,
    RouterLink
  ],
  templateUrl: './students.html',
  styleUrl: './students.scss',
})
export class Students {
  private studentsService = inject(StudentService);

  kpiCards = signal<IKpiCard[]>([
    {
      label: 'Total de alunos',
      value: '842',
      subtext: 'Alunos cadastrados'
    },
    {
      label: 'Participam do PEI',
      value: '36',
      subtext: 'Programa Escola Integrada'
    },
    {
      label: 'Turmas cadastradas',
      value: '18',
      subtext: 'Turmas disponíveis'
    }
  ]);

  students = this.studentsService.students;
}
