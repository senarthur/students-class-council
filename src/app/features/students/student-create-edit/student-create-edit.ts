import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { BaseCard } from '../../../shared/base-card/base-card';
import { Input } from '../../../shared/input/input';
import { Select } from '../../../shared/select/select';
import { SelectOption } from '../../../shared/select/select-option.model';
import { ToggleGroup } from '../../../shared/toggle-group/toggle-group';
import { RouterLink } from '@angular/router';
import { Header } from '../../../shared/header/header';
import { StudentService } from '../../service/student-service';
import { IClass, IStudent } from '../../service/iStudent';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-create',
  imports: [
    Header,
    Button,
    BaseCard,
    Input,
    Select,
    ToggleGroup,
    RouterLink,
    DatePipe
  ],
  templateUrl: './student-create-edit.html',
  styleUrl: './student-create-edit.scss',
})
export class StudentCreateEdit implements OnInit {

  private studentsService = inject(StudentService);

  id = input<string | undefined>();
  isEdit = computed(() => !!this.id());

  title = computed(() => {
    return this.isEdit() ? 'Editar Aluno' : 'Cadastrar Aluno';
  })

  helpText = computed(() => {
    return this.isEdit() ? 'Atualize os dados cadastrais do estudante.' : 'Consulte os dados essenciais e acesse os acompanhamentos do estudante.';
  })

  student = signal<IStudent | null>(null);

  ngOnInit() {
    const id = this.id();
    if (id) {
      const student = this.studentsService.getStudentById(id);
      if (student == undefined)
        this.student.set(null);
      else
        this.student.set(student);
    }
  }

  classes = signal<SelectOption[]>(this.iClassToSelectOption(this.studentsService.classes()));

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

  private iClassToSelectOption(iclasses: IClass[]): SelectOption[] {
    const classOption: SelectOption[] = [];

    iclasses.forEach(iclass => {
      classOption.push({
        label: iclass.fullDescription,
        value: iclass.id
      })
    });

    return classOption;
  }
}
