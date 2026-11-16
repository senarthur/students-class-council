import { Component, inject, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from './sidebar-service';

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
  protected sidebarService = inject(SidebarService);

  isSidebarCollapsed = this.sidebarService.isSidebarCollapsed;

  navItems = [
    {
      icon: 'icon fa-solid fa-border-all',
      label: 'Visão Geral',
      path: '/inicio'
    },
    {
      icon: 'icon fa-solid fa-user',
      label: 'Aluno',
      path: '/estudantes'
    },
    {
      icon: 'icon fa-solid fa-building-columns',
      label: 'Conselho de Classe',
      path: '/conselho-classe'
    },
    {
      icon: 'icon fa-regular fa-newspaper',
      label: 'Ocorrências',
      path: '/occurrences'
    },
    {
      icon: 'icon fa-solid fa-gear',
      label: 'Configurações',
      path: '/configuracao'
    },
  ]

  toggle() {
    this.sidebarService.toggleSidebar();
  }
}
