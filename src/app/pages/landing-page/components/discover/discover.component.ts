import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuctionCardComponent } from "../../../../shared/components/auction-card/auction-card.component";
import { AuctionsService } from '../hot-auctions/services/auctions.service';

@Component({
  selector: 'app-discover',
  imports: [AuctionCardComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverComponent {

  protected auctions = inject(AuctionsService).auctions;
  
}
