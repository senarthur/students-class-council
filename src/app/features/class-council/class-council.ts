import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { BaseCard } from '../../shared/base-card/base-card';
import { Input } from '../../shared/input/input';
import { Select } from '../../shared/select/select';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { Table } from '../../shared/table/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-class-council',
  imports: [
    Sidebar,
    BaseCard,
    Header,
    Select,
    Input,
    KpiCard,
    Table,
    RouterLink
  ],
  templateUrl: './class-council.html',
  styleUrl: './class-council.scss',
})
export class ClassCouncil {

  classesOptions = [
    {
      label: '1° ano A',
      value: '1A'
    },
    {
      label: '1° ano B',
      value: '1B'
    },
    {
      label: '1° ano C',
      value: '1C'
    },
    {
      label: '2° ano A',
      value: '2A'
    },
    {
      label: '2° ano B',
      value: '2B'
    },
    {
      label: '2° ano C',
      value: '2C'
    },
  ]

  trimestreOptions = [
    {
      label: '1° trimestre de 2026',
      value: '1-2026'
    },
    {
      label: '2° trimestre de 2026',
      value: '2-2026'
    },
    {
      label: '3° trimestre de 2026',
      value: '3-2026'
    },
    {
      label: '1° trimestre de 2025',
      value: '1-2025'
    },
    {
      label: '2° trimestre de 2025',
      value: '2-2025'
    },
    {
      label: '3° trimestre de 2025',
      value: '3-2025'
    },
  ]

  data: IKpiCard[] = [
    {
      label: 'Disciplinas enviadas',
      value: '6 de 8'
    },
    {
      label: 'Avaliações pendentes',
      value: '2'
    },
    {
      label: 'Estudantes na turma',
      value: '28'
    },
  ]
}
