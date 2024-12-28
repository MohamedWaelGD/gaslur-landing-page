import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AuctionsService } from './services/auctions.service';
import { AuctionCardComponent } from '../../../../shared/components/auction-card/auction-card.component';
import gsap from 'gsap';

@Component({
  selector: 'app-hot-auctions',
  imports: [AuctionCardComponent],
  templateUrl: './hot-auctions.component.html',
  styleUrl: './hot-auctions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotAuctionsComponent implements AfterViewInit {

  protected auctions = inject(AuctionsService).auctions;

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      'scrollTrigger':{
        trigger: '.hot-auctions',
        start: 'top 85%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });
    tl.add(
      gsap.from('.hot-auctions h2', {
        y: -100,
        opacity: 0
      })
    );
    tl.add(
      gsap.from('.hot-auctions button', {
        y: 100,
        opacity: 0
      }),
      '-=0.5'
    );
    tl.add(
      gsap.from('.hot-auctions app-auction-card', {
        y: 100,
        opacity: 0,
        stagger: 0.2
      })
    )
  }
}
