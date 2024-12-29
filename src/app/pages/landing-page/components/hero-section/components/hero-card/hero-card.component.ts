import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCardComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animation();
    }
  }

  private animation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card-holo',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
    tl.add(
      gsap.from('.card-holo .pink-circle', {
        opacity: 0,
      })
    );
    tl.add(
      gsap.from('.card-holo .blue-circle', {
        opacity: 0,
      })
    );
    tl.add(
      gsap.from('.card-holo .card', {
        opacity: 0,
        y: 100,
      }),
      '-=0.25'
    );
    tl.add(
      gsap.fromTo('app-hero-card .border-gradient', {
        "--opacity": 0
      }, {
        "--opacity": 1,
      })
    );
  }
}
