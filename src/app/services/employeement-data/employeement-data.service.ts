import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeementDataService {
  employeementData=[
    {
      id: 1,
      title: 'Product Engineer Intern',
      company: "Tezo Dgital",
      duration: "(Jan 2024 - Present)"
    },
    {
      id: 2,
      title: "Java Backend Develoepr",
      company: "HighRadius",
      duration: "(July 2023 - Nov 2024)"
    },
    {
      id: 3,
      title: "Content Creator",
      company: "Unacademy",
      duration: "(Sept 2020 - Sept2021)"
    }
  ];

}
