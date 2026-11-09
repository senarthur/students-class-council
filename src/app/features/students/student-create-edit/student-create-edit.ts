import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { Button } from '../../../shared/button/button';
import { BaseCard } from '../../../shared/base-card/base-card';
import { Input } from '../../../shared/input/input';
import { Select } from '../../../shared/select/select';
import { SelectOption } from '../../../shared/select/select-option.model';
import { ToggleGroup } from '../../../shared/toggle-group/toggle-group';
import { Router, RouterLink } from '@angular/router';
import { Header } from '../../../shared/header/header';
import { StudentService } from '../../service/student-service';
import { IStudent } from '../../service/iStudent';

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
  templateUrl: './student-create-edit.html',
  styleUrl: './student-create-edit.scss',
})
export class StudentCreateEdit implements OnInit {

  private studentsService = inject(StudentService);
  private router = inject(Router);

  id = input<string | undefined>();
  isEdit = computed(() => !!this.id());

  title = computed(() => {
    return this.isEdit() ? 'Editar Aluno' : 'Cadastrar Aluno';
  })

  helpText = computed(() => {
    return this.isEdit() ? 'Atualize os dados cadastrais do estudante.' : 'Consulte os dados essenciais e acesse os acompanhamentos do estudante.';
  })

  student: IStudent | null = null;

  ngOnInit() {
    if (this.id()) {
      const id = Number(this.id());
      const targetStudent = this.studentsService.getStudentById(id);

      if (targetStudent !== null) {
        this.student = targetStudent;
      } else {
        this.router.navigate(['/estudantes']);
      }
    }
  }

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
