
import { Component } from '@angular/core';

import {
  GITHUB_URL,
  PROJECTS,
  GAME_PROJECTS
} from '../../Data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly github = GITHUB_URL;

  readonly projects = PROJECTS;

  readonly gameProjects = GAME_PROJECTS;
}
