
import { Component } from '@angular/core';
import { GITHUB_URL } from '../../Data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly year = new Date().getFullYear();
  readonly github = GITHUB_URL;
}
