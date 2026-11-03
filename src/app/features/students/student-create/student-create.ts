import { Component, signal } from '@angular/core';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { Button } from '../../../shared/button/button';
import { BaseCard } from '../../../shared/base-card/base-card';
import { Input } from '../../../shared/input/input';
import { Select } from '../../../shared/select/select';
import { SelectOption } from '../../../shared/select/select-option.model';
import { ToggleGroup } from '../../../shared/toggle-group/toggle-group';
import { RouterLink } from '@angular/router';
import { Header } from '../../../shared/header/header';

@Component({
  selector: 'app-student-create',
  imports: [
    Sidebar,
    Header,
    Button,
    BaseCard,
    Input,
    Select,
    ToggleGroup,
    RouterLink
  ],
  templateUrl: './student-create.html',
  styleUrl: './student-create.scss',
})
export class StudentCreate {
  classes = signal<SelectOption[]>([
    {
      value: '1A',
      label: '1° Ano A',
    },
    {
      value: '1B',
      label: '1° Ano B',
    }
  ])

  shift = signal<SelectOption[]>([
    {
      value: 'manha',
      label: 'Manhã',
    },
    {
      value: 'tarde',
      label: 'Tarde',
    },
    {
      value: 'noite',
      label: 'Noite'
    }
  ])

  status = signal<SelectOption[]>([
    {
      value: 'ativo',
      label: 'Ativo',
    },
    {
      value: 'inativo',
      label: 'Inativo',
    },
  ])

  disorders = signal<SelectOption[]>([
    {
      value: 'TDAH',
      label: 'Transtorno de Déficit de Atenção e Hiperatividade',
    },
    {
      value: 'TOD',
      label: 'Transtorno Opositor Desafiador',
    },
  ])
}
