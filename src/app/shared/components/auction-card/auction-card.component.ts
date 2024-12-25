import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Auction } from '../../../pages/landing-page/components/hot-auctions/models/auction.model';

@Component({
  selector: 'app-auction-card',
  imports: [],
  templateUrl: './auction-card.component.html',
  styleUrl: './auction-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionCardComponent {

  public auction = input.required<Auction>();

}
