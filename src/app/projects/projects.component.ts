import { Component, OnInit } from '@angular/core';
import {Project} from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:  Project[] = [
    {
      name: 'Carrito de Compras',
      webUrl: 'https://shop-cart-angular.now.sh/',
      description: 'Carrito de compras construido con Angular Material',
      technologies: ['Angular', 'Angular Material'],
      githubUrl: 'https://github.com/vlrr91/shop-cart-angular',
      image: 'assets/images/p1.jpg'
    },
    {
      name: 'Personajes De Rick And Morty',
      webUrl: 'https://rick-and-morty-app.now.sh/',
      description: 'Lista de los personajes de Rick and Morty usando paginación',
      technologies: ['Angular'],
      githubUrl: 'https://github.com/vlrr91/rick-and-morty-app',
      image: 'assets/images/p2.jpg'
    },
    {
      name: 'Aplicación Del Clima',
      webUrl: 'https://weatherapp-dark-mode.now.sh/',
      description: 'Aplicación que permite obtener la información del clima de una cuidad, tiene soporte para modo oscuro',
      technologies: ['React'],
      githubUrl: 'https://github.com/vlrr91/weatherapp-dark-mode',
      image: 'assets/images/p3.jpg'
    },
    {
      name: 'Pokédex',
      webUrl: 'https://pokemon-app-react.now.sh/',
      description: 'Lista de Pokémon usando un scroll infinito',
      technologies: ['React', 'Intersection Observer API'],
      githubUrl: 'https://github.com/vlrr91/pokemon-app-react',
      image: 'assets/images/p4.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
