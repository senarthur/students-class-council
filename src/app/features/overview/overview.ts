import { Component, inject, OnInit, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { BaseCard } from '../../shared/base-card/base-card';
import { Header } from '../../shared/header/header';
import { Table } from '../../shared/table/table';
import { ProgressBar } from '../../shared/progress-bar/progress-bar';
import { Color } from '../../shared/progress-bar/color.model';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-overview',
  imports: [
    Sidebar,
    Header,
    KpiCard,
    BaseCard,
    Table,
    ProgressBar,
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {

  kpiCards = signal<IKpiCard[]>([
    {
      icon: 'fa-solid fa-users',
      label: 'Alunos cadastrados',
      value: '420',
      subtext: '+12 neste mês',
      variant: 'primary'
    },
    {
      icon: 'fa-solid fa-building-columns',
      label: 'Conselhos em andamento',
      value: '8',
      subtext: 'de 15 turmas',
      variant: 'blue'
    },
    {
      icon: 'fa-solid fa-users',
      label: 'Avaliações concluídas',
      value: '76%',
      subtext: 'do trimestre atual',
      variant: 'purple'
    },
    {
      icon: 'fa-solid fa-users',
      label: 'Ocorrências registradas',
      value: '24',
      subtext: 'nesse trimestre',
      variant: 'warning'
    },
  ])

  color = Color;
}
