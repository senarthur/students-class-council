import { Component, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Button } from '../../shared/button/button';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { BaseCard } from '../../shared/base-card/base-card';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Table } from '../../shared/table/table';

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

  students = signal([
    {
      id: 1,
      initials: 'LF',
      name: 'Lucas Ferreira',
      grade: '5º ano A',
      shift: 'Manhã',
      hasPei: true,
      status: 'Ativo',
      selected: false
    },
    {
      id: 1,
      initials: 'MO',
      name: 'Mariana Oliveira',
      grade: '5º ano A',
      shift: 'Manhã',
      hasPei: false,
      status: 'Ativo',
      selected: false
    },
    {
      id: 1,
      initials: 'GS',
      name: 'Gabriel Santos',
      grade: '6º ano B',
      shift: 'Tarde',
      hasPei: false,
      status: 'Ativo',
      selected: false
    },
    {
      id: 1,
      initials: 'AC',
      name: 'Ana Clara Souza',
      grade: '6º ano B',
      shift: 'Tarde',
      hasPei: true,
      status: 'Ativo',
      selected: false
    },
    {
      id: 1,
      initials: 'PH',
      name: 'Pedro Henrique Lima',
      grade: '7º ano A',
      shift: 'Tarde',
      hasPei: false,
      status: 'Ativo',
      selected: false
    },
  ])
}
