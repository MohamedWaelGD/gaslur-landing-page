import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animation();
    }
  }

  animation(): void {
    gsap.from('.brand-name', {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from('nav li', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
    gsap.from('nav .buttons', {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }
}
