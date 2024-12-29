import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { AuctionsService } from './services/auctions.service';
import { AuctionCardComponent } from '../../../../shared/components/auction-card/auction-card.component';
import gsap from 'gsap';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hot-auctions',
  imports: [AuctionCardComponent],
  templateUrl: './hot-auctions.component.html',
  styleUrl: './hot-auctions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotAuctionsComponent implements AfterViewInit {
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
        trigger: '.hot-auctions',
        start: 'top 85%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
    tl.add(
      gsap.from('.hot-auctions h2', {
        y: -100,
        opacity: 0,
      })
    );
    tl.add(
      gsap.from('.hot-auctions button', {
        y: 100,
        opacity: 0,
      }),
      '-=0.5'
    );
    tl.add(
      gsap.from('.hot-auctions app-auction-card', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
      })
    );
  }
}
