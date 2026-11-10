
import {
  Component,
  HostListener,
  OnInit,
  signal
} from '@angular/core';

import { NAVIGATION } from '../../Data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  readonly navigation = NAVIGATION;

  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly scrollProgress = signal(0);
  readonly activeSection = signal('home');

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const scrollY = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    this.isScrolled.set(scrollY > 35);

    const progress = documentHeight > 0
      ? (scrollY / documentHeight) * 100
      : 0;

    this.scrollProgress.set(
      Math.min(100, Math.max(0, progress))
    );

    const sections = this.navigation
      .map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(
          item.href.substring(1)
        )
      }))
      .filter(
        (section): section is {
          id: string;
          element: HTMLElement;
        } => section.element !== null
      );

    let current = 'home';

    for (const section of sections) {
      const top = section.element.getBoundingClientRect().top;

      if (top <= 180) {
        current = section.id;
      }
    }

    if (scrollY < 100) {
      current = 'home';
    }

    this.activeSection.set(current);
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
