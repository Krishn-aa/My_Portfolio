import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationDataService {

  educations = [
    {
      id: 1,
      title: "Bachelor of Technology (B.Tech.)",
      duration: "2020 - 2024",
      institution: "Kalinga Institute of Industrial Technology",
      grade:'CGPA: 8.87',
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      duration: "2018 - 2020",
      institution: "Nardiganj College",
      grade:'Grades: 83.2%',
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      duration: "2018",
      institution: "Vivekanand Public School",
      grade:'Grades: 80.6%',
    }
  ]
}
