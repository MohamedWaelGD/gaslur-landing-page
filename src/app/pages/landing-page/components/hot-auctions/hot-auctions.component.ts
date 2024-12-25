import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuctionsService } from './services/auctions.service';
import { AuctionCardComponent } from '../../../../shared/components/auction-card/auction-card.component';

@Component({
  selector: 'app-hot-auctions',
  imports: [AuctionCardComponent],
  templateUrl: './hot-auctions.component.html',
  styleUrl: './hot-auctions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotAuctionsComponent {

  protected auctions = inject(AuctionsService).auctions;
}
