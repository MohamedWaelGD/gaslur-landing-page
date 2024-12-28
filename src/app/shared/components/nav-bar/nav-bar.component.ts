import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  ngOnInit(): void {
    gsap.from('.brand-name', {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from('nav li', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1
    });
    gsap.from('nav .buttons', {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }
}
