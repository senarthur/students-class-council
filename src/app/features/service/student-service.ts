import { Injectable, signal } from '@angular/core';
import { IStudent } from './iStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = signal<IStudent[]>([
    {
      id: 1,
      name: 'Lucas Ferreira',
      profileUrl: `https://ui-avatars.com/api/?name=Lucas+Ferreira&background=E3F1E9&color=17563F`,
      grade: '5º ano A',
      shift: 'Manhã',
      hasPei: true,
      status: 'Ativo',
      registration: new Date(2021, 8, 12),
      disorderInfo: {
        hasDisorder: false,
        disorders: []
      }
    },
    {
      id: 2,
      name: 'Mariana Oliveira',
      profileUrl: `https://ui-avatars.com/api/?name=Mariana+Oliveira&background=E3F1E9&color=17563F`,
      grade: '5º ano A',
      shift: 'Manhã',
      hasPei: false,
      status: 'Ativo',
      disorderInfo: {
        hasDisorder: false,
        disorders: []
      }
    },
    {
      id: 3,
      name: 'Gabriel Santos',
      profileUrl: `https://ui-avatars.com/api/?name=Gabriel+Santos&background=E3F1E9&color=17563F`,
      grade: '6º ano B',
      shift: 'Tarde',
      hasPei: false,
      status: 'Ativo',
      disorderInfo: {
        hasDisorder: false,
        disorders: []
      }
    },
    {
      id: 4,
      profileUrl: `https://ui-avatars.com/api/?name=Ana+Clara&background=E3F1E9&color=17563F`,
      name: 'Ana Clara Souza',
      grade: '6º ano B',
      shift: 'Tarde',
      hasPei: true,
      status: 'Ativo',
      disorderInfo: {
        hasDisorder: true,
        disorders: ['Transtorno Opositivo-Desafiador (TOD)', 'Transtorno do Déficit de Atenção com Hiperatividade (TDAH)']
      }
    },
    {
      id: 5,
      profileUrl: `https://ui-avatars.com/api/?name=Pedro+Henrique&background=E3F1E9&color=17563F`,
      name: 'Pedro Henrique Lima',
      grade: '7º ano A',
      shift: 'Tarde',
      hasPei: false,
      status: 'Ativo',
      disorderInfo: {
        hasDisorder: true,
        disorders: ['Transtorno do Espectro Autista (TEA)']
      }
    },
  ])

  getStudentById(id: number) {
    return this.students().filter(student => student.id === id)[0];
  }
}
