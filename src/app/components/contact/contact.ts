
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  readonly name = 'Denix Singh Gill';

  // Public contact email for portfolio
  readonly email = 'Niffsxfix@gmail.com';

  readonly linkedIn =
    'https://www.linkedin.com/in/denix-gill-5a896635b/';

  readonly github = 'https://github.com/DX262';

  readonly cvDanish = 'assets/cv-da.pdf';
  readonly cvEnglish = 'assets/cv-en.pdf';

  readonly opportunity =
    'I am looking for a software development apprenticeship ' +
    'in Denmark, with a particular interest in backend ' +
    'and full stack development using C#, .NET and Angular.';

  get emailLink(): string {
    const subject = encodeURIComponent(
      'Software Development Apprenticeship Opportunity'
    );

    return `mailto:${this.email}?subject=${subject}`;
  }
}
