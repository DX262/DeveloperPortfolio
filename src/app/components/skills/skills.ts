
import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../Data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  readonly skillGroups = SKILL_GROUPS;
}
