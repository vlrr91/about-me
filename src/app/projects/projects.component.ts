import { Component, OnInit } from '@angular/core';

import {ProjectsService} from "./projects.service";
import {ProjectGithub} from "./project";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsGithub$: Observable<ProjectGithub[]>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsGithub$ = this.projectsService.getAllGithubProjects();
  }
}
