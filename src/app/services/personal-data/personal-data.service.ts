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
    description: "My name is Krishna Anand. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
    github: 'https://github.com/Krishn-aa',
    linkedIn: 'https://linkedin.com/in/krishna-anand-99ba13202/',
    leetcode: 'https://leetcode.com/u/code_krishnaa/',
    resume: '/assets/pdf/KrishnaAnand.pdf',
  };
}
