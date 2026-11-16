import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { BaseCard } from '../../shared/base-card/base-card';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Table } from '../../shared/table/table';
import { StudentService } from '../service/student-service';
import { IStudent } from '../service/iStudent';
import { Loading } from '../../shared/loading/loading';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-students',
  imports: [
    Header,
    Button,
    BaseCard,
    KpiCard,
    Table,
    RouterLink,
    Loading,
    Pagination
  ],
  templateUrl: './students.html',
  styleUrl: './students.scss',
})
export class Students implements OnInit {
  private studentsService = inject(StudentService);

  students = signal<IStudent[]>([]);
  isLoading = signal<boolean>(false);
  summary = signal<any>({});

  currentPage = signal(1);
  itemsPerPage = signal(5);

  kpiCards = signal<IKpiCard[]>([
    {
      label: 'Total de alunos',
      value: '8',
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

  paginatedStudents = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return this.students().slice(start, start + this.itemsPerPage());
  });

  ngOnInit(): void {
    this.students.set(this.studentsService.students());
  }
}
