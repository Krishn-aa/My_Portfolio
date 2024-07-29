import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  projectsData = [
    {
        id: 1,
        name: 'To-Do-App - Webapp',
        description: "A web app that offers a fast and reliable solution for task management. It features a user-friendly interface for adding, editing, and deleting tasks, with backlogs management, real-time updates, and offline support. This app is ideal for boosting productivity and staying organized, whether for personal or professional use.",
        tools: ['Angular', 'C#', 'RestApi', 'SQL-Server', ".Net",'Entity Framework'],
        role: 'Full Stack Developer',
    },
    {
        id: 2,
        name: 'Employee Directory',
        description: "I created a project for managing employees using advanced technology to streamline various HR processes. The system allows for adding new employees, removing employees, editing employee details, and assigning roles. This comprehensive solution ensures efficient and effective management of employee information and roles within the company.",
        tools: ['Angular', 'C#', 'RestApi', 'SQL-Server', ".Net",'Entity Framework'],
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'Next Movie',
        description: 'The project leverages machine learning and fundamental natural language processing techniques to develop a movie recommender system. Data cleaning and preprocessing refine the data for effective analysis and modeling. The system is deployed as a web application using the Streamlit framework, allowing users to interactively receive movie suggestions via a user-friendly interface.',
        tools: ['Python', 'Machine Learning', 'Data Analytics', 'Pandas', 'Numpy', 'SQL', 'API Integration', 'Scikit Learn', 'Machine Learning Algorithms'],
        role: 'Data Science'
    }
];

}
