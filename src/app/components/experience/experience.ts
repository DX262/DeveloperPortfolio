
import { Component } from '@angular/core';
import { EDUCATION } from '../../Data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  readonly timeline = EDUCATION;
}
