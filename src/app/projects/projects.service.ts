import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

import {ProjectGithub} from "./project";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  private url = 'https://api.github.com/users/vicc91/repos';

  constructor(private http: HttpClient) {}

  getAllGithubProjects(): Observable<ProjectGithub[]> {
    return this.http.get<ProjectGithub[]>(this.url).pipe(
      map(data => data.map(project => ({
        name: project.name,
        html_url: project.html_url,
        description: project.description
      }))),
      catchError(ProjectsService.handleError)
    );
  }

  private static handleError(err: any) {
    console.log(err);
    if (err.error instanceof ErrorEvent) {
      return throwError(`An error occurred: ${err.error.message}`);
    } else {
      return throwError(`Github API error: ${err.message}`);
    }
  }
}
