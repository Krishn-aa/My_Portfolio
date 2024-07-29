import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchivementDataService {
  achivements= [
    {
      id:1,
      title:'Hacktoberfest 2022',
      img:'',
      description:'I was honored to lead my team to the Grand Finale of a national competition featuring around 450 teams from across India. We secured first place and won a cash prize of ₹1 lakh by tackling the problem statement SIH1367 provided by the Ministry of Social Justice and Empowerment (MSJE), Government of India. This achievement underscores our ability to develop innovative solutions for complex challenges, demonstrating both technical expertise and effective problem-solving skills.',
    }
  ];
}
