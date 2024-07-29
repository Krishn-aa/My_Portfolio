import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeAboutMeComponent } from '../home-about-me/home-about-me.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent,HomeAboutMeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 
}
