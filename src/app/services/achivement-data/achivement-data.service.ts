import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchivementDataService {
  achivements= [
    {
      id:1,
      title:'Hacktoberfest 2022',
      img:'assets/image/hacktoberfest.png',
      description:'I participated in Hacktoberfest 2022, actively contributing to open source projects by submitting at least four pull requests (PRs). This experience introduced me to the vibrant open source community, enhanced my skills in collaborative software development, and improved my understanding of version control systems. It was a rewarding experience that deepened my appreciation for the open source ecosystem.',
    },
    {
      id:2,
      title:'AWS Academy Graduate',
      img:'assets/image/aws.png',
      description:'I completed an AWS Certified course through AWS Academy, acquiring key skills in cloud technologies. The course prepared me for industry-recognized certifications and careers in the rapidly growing cloud computing sector. It covered essential AWS Cloud topics, giving me practical knowledge in cloud infrastructure, services, and deployment, positioning me well for roles in this in-demand field.',
    }
  ];
}
