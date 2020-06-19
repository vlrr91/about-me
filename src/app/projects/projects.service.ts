import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService { 
  projects:  Project[] = [
    {
      name: 'Carrito de Compras',
      webUrl: 'https://shop-cart-angular.now.sh/',
      description: 'Interfaz de usuario construida con Angular Material, los componentes se comunican con el estado del carrito usando un servicio con observables',
      technologies: ['Angular', 'Angular Material'],
      githubUrl: 'https://github.com/vlrr91/shop-cart-angular',
      image: 'assets/images/p1.jpg'
    },
    {
      name: 'Aplicación Del Clima',
      webUrl: 'https://weatherapp-dark-mode.now.sh/',
      description: 'Aplicación que permite buscar la información del clima de una cuidad. Tiene soporte para modo oscuro, usa prefers color scheme para detectar la configuración en el sitema operativo',
      technologies: ['React'],
      githubUrl: 'https://github.com/vlrr91/weatherapp-dark-mode',
      image: 'assets/images/p3.jpg'
    },
    {
      name: 'Spoti App',
      webUrl: 'https://spoti-app.vercel.app//',
      description: 'Aplicación que vizualiza datos de la API de Spotify, estos junto con el token son traidos por medio de un servicio web construido en Node.js, y alojado en heroku',
      technologies: ['Angular', 'Bootstrap'],
      githubUrl: 'https://github.com/vlrr91/about-me',
      image: 'assets/images/p5.jpg',
      extraInfo: {
        text: 'servicio web',
        link: 'https://github.com/vlrr91/spoti-api-node'
      }
    },
    {
      name: 'Personajes De Rick And Morty',
      webUrl: 'https://rick-and-morty-app.now.sh/',
      description: 'Lista de los personajes de Rick and Morty, estos son mostrados usando paginación. Las rutas durante la navegación usan resolvers (Angular) para obtener los datos',
      technologies: ['Angular'],
      githubUrl: 'https://github.com/vlrr91/rick-and-morty-app',
      image: 'assets/images/p2.jpg'
    },
    {
      name: 'Pokédex',
      webUrl: 'https://pokemon-app-react.now.sh/',
      description: 'Lista de Pokémon obtenidos desde una api (PokéAPI), estos son cargados usando un scroll infinito. Aplicación hecha con react hooks',
      technologies: ['React', 'Intersection Observer API'],
      githubUrl: 'https://github.com/vlrr91/pokemon-app-react',
      image: 'assets/images/p4.jpg'
    },
  ]

  getProjects(): Project[] {
    return this.projects;
  }
}