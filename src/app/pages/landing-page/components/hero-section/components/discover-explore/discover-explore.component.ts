import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-discover-explore',
  imports: [],
  templateUrl: './discover-explore.component.html',
  styleUrl: './discover-explore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverExploreComponent implements OnInit {
  ngOnInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: '.intro',
        start: 'top center',
        end: 'bottom bottom'
      }
    });
    tl.add(
      gsap.from('.intro h1', {
        x: -100,
        opacity: 0,
      })
    );
    tl.add(
      gsap.from('.intro p', {
        x: -100,
        opacity: 0,
      }),
      "-=0.2"
    );
    tl.add(
      gsap.from('.intro .buttons', {
        x: -100,
        opacity: 0,
      }),
      "-=0.2"
    );
  }
}
