import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  personalData = {
    name: 'Krishna Anand',
    phone: '+91 7004155601',
    email:  'krishnaanand0001@gmail.com',
    address: 'Madhapur, Hyderabad, Telangana, India',
    profile:'assets/image/profile.png',
    designation: 'Software Developer',
    description: "I am Krishna Anand, a dedicated and enthusiastic programmer with a strong passion for learning and exploring new technologies. My expertise lies in problem-solving and web application development, with a core focus on JavaScript, which I use across multiple development stacks. I am a quick learner with a self-driven approach, always eager to expand my knowledge and contribute to making the web more accessible and dynamic. I am currently open to job opportunities that align with my skills and professional interests.",
    github: 'https://github.com/Krishn-aa',
    linkedIn: 'https://linkedin.com/in/krishna-anand-99ba13202/',
    leetcode: 'https://leetcode.com/u/code_krishnaa/',
    resume: '/assets/pdf/KrishnaAnand.pdf',
  };
}
