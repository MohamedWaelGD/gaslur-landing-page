import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { GettingStartedService } from './services/getting-started.service';
import { GettingStartedCardComponent } from './components/getting-started-card/getting-started-card.component';
import gsap from 'gsap';

@Component({
  selector: 'app-getting-started',
  imports: [GettingStartedCardComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent implements AfterViewInit {
  protected gettingStarted = inject(GettingStartedService).gettingStarted;

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.getting-started',
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
    tl.add(
      gsap.from('.getting-started h2', {
        opacity: 0,
        y: -100,
      })
    );
    tl.add(
      gsap.from('.getting-started p', {
        opacity: 0,
        y: -100,
      })
    );
    tl.add(
      gsap.from('.getting-started app-getting-started-card', {
        opacity: 0,
        y: 100,
        stagger: 0.2
      }),
      "-=0.2"
    )
  }
}
