import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { AuctionCardComponent } from "../../../../shared/components/auction-card/auction-card.component";
import { AuctionsService } from '../hot-auctions/services/auctions.service';
import gsap from 'gsap';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-discover',
  imports: [AuctionCardComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent implements AfterViewInit {

  protected auctions = inject(AuctionsService).auctions;
  
    constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  
    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.animation();
      }
    }
  
    animation(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.discover',
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      }
    });

    tl.add(
      gsap.from('.discover h2', {
        opacity: 0,
        y: -100
      })
    );
    tl.add(
      gsap.from('.discover .filter', {
        opacity: 0,
        y: 100
      }),
      "-=0.5"
    );
    tl.add(
      gsap.from('.discover app-auction-card', {
        opacity: 0,
        y: 100,
        stagger: 0.1
      }),
      "-=0.5"
    )
  }
}
