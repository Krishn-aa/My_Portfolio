import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeementDataService {
  employeementData = [
    {
      id: 1,
      title: 'Software Engineer L2',
      company: 'Predigle',
      duration: '(November - Present)',
    },
    {
      id: 2,
      title: 'Product Engineer Intern',
      company: 'Tezo Dgital',
      duration: '(Jan 2024 - July 2024)',
    },
    {
      id: 3,
      title: 'Java Backend Develoepr',
      company: 'HighRadius',
      duration: '(July 2023 - Nov 2024)',
    },
    {
      id: 4,
      title: 'Content Creator',
      company: 'Unacademy',
      duration: '(Sept 2020 - Sept2021)',
    },
  ];
}
