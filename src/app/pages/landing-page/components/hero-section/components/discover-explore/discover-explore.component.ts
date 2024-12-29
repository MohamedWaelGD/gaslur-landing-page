import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-discover-explore',
  imports: [],
  templateUrl: './discover-explore.component.html',
  styleUrl: './discover-explore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverExploreComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animation();
    }
  }

  private animation(){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });
    tl.add(
      gsap.from('.intro h1', {
        y: -100,
        opacity: 0,
      })
    );
    tl.add(
      gsap.from('.intro p', {
        y: -100,
        opacity: 0,
      }),
      "-=0.2"
    );
    tl.add(
      gsap.from('.intro .buttons', {
        y: -100,
        opacity: 0,
      }),
      "-=0.2"
    );
  }
}
