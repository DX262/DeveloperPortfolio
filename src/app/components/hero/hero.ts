
import { Component } from '@angular/core';
import { GITHUB_URL } from '../../Data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  readonly fullName = 'Denix Gill';

  readonly github = GITHUB_URL;

  readonly technologies = [
    'C#',
    'ASP.NET Core',
    'Angular',
    'TypeScript',
    'SQL Server',
    'Luau'
  ];
}
