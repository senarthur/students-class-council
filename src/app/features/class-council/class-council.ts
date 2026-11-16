import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { BaseCard } from '../../shared/base-card/base-card';
import { Input } from '../../shared/input/input';
import { Select } from '../../shared/select/select';
import { KpiCard } from '../../shared/kpi-card/kpi-card';
import { IKpiCard } from '../../shared/kpi-card/ikpi-card';
import { Table } from '../../shared/table/table';
import { RouterLink } from '@angular/router';
import { StudentService } from '../service/student-service';
import { IClass, IClassCouncilValue, IStudent } from '../service/iStudent';
import { SelectOption } from '../../shared/select/select-option.model';

@Component({
  selector: 'app-class-council',
  imports: [
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
export class ClassCouncil implements OnInit {
  private readonly studentsService = inject(StudentService);

  classesOptions = signal<SelectOption[]>([]);
  students = signal<IStudent[]>([]);

  studentsFilter = computed(() => {
    return this.students().filter(student => student);
  })

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

  ngOnInit() {
    this.classesOptions.set(this.iClassToSelectOption(this.studentsService.classes()));
    this.students.set(this.studentsService.students());
  }

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
