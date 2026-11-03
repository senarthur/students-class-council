import { Component, signal } from '@angular/core';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { BaseCard } from '../../../shared/base-card/base-card';
import { Button } from '../../../shared/button/button';
import { RouterLink } from '@angular/router';
import { Header } from '../../../shared/header/header';

@Component({
  selector: 'app-student-details',
  imports: [
    Sidebar,
    Header,
    BaseCard,
    Button,
    RouterLink
  ],
  templateUrl: './student-details.html',
  styleUrl: './student-details.scss',
})
export class StudentDetails {

  student = signal({
    initials: 'LF',
    name: 'Lucas Ferreira',
    registration: '12/02/2021',
    grade: '5° ano A',
    shift: 'Manhã',
    hasPei: false,
    disorderInfo: 'Conforme cadastro'
  })

  trackingList = signal([
    {
      id: 1,
      icon: 'fa fa-solid fa-building-columns',
      title: 'Conselho de Classe',
      description: 'Observações e registros por trimestre',
      colorVariant: 'primary'
    },
    {
      id: 2,
      icon: 'fa fa-solid fa-newspaper',
      title: 'Ocorrências',
      description: 'Histórico de acontecimentos e providências',
      colorVariant: 'blue'
    },
    {
      id: 3,
      icon: 'fa fa-solid fa-clock',
      title: 'Frequência',
      description: 'Resumo trimestral registrado pela Busca Ativa',
      colorVariant: 'warning'
    }
  ])
}
