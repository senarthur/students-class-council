import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  navItems = [
    {
      icon: 'icon fa-solid fa-border-all',
      label: 'Visão Geral',
      path: '/overview'
    },
    {
      icon: 'icon fa-solid fa-user',
      label: 'Aluno',
      path: '/student'
    },
    {
      icon: 'icon fa-solid fa-building-columns',
      label: 'Conselho de Classe',
      path: '/class-council'
    },
    {
      icon: 'icon fa-regular fa-newspaper',
      label: 'Ocorrências',
      path: '/occurrences'
    },
    {
      icon: 'icon fa-solid fa-gear',
      label: 'Configurações',
      path: '/settings'
    },
  ]
}
