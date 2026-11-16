import { Component, inject, input, OnInit, signal } from '@angular/core';
import { BaseCard } from '../../../shared/base-card/base-card';
import { Button } from '../../../shared/button/button';
import { Router, RouterLink } from '@angular/router';
import { Header } from '../../../shared/header/header';
import { StudentService } from '../../service/student-service';
import { IStudent } from '../../service/iStudent';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [
    Header,
    BaseCard,
    Button,
    RouterLink,
    DatePipe
  ],
  templateUrl: './student-details.html',
  styleUrl: './student-details.scss',
})
export class StudentDetails implements OnInit {

  private studentsService = inject(StudentService);
  private router = inject(Router);

  id = input<string | undefined>();

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

  student = signal<IStudent | null>(null);

  ngOnInit() {
    const id = this.id();
    if (id) {
      const student = this.studentsService.getStudentById(id);
      if (student == undefined) {
        this.router.navigate(['/students']);
      } else {
        this.student.set(student);
      }

    }
  }
}
