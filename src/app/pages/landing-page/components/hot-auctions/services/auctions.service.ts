import { computed, Injectable, signal } from '@angular/core';
import { Auction } from '../models/auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  private _auctions = signal<Auction[]>([
    {
      img: '/images/auctions/unsplash_ruJm3dBXCqw.png',
      title: 'Lorem Ipsum',
      price: 1.20,
      endTime: '01.34.45'
    },
    {
      img: '/images/auctions/unsplash_9XngoIpxcEo.png',
      title: 'Dolor sit amet',
      price: 0.21,
      endTime: '01.34.45'
    },
    {
      img: '/images/auctions/unsplash_wN9DU73b8_s.png',
      title: 'Dignissim curabitu..',
      price: 0.01,
      endTime: '56.44.45'
    },
    {
      img: '/images/auctions/unsplash_7pQszt9KiEY.png',
      title: 'Amet pellentesq..',
      price: 0.55,
      endTime: '01.34.45'
    }
  ]);

  public auctions = computed(() => this._auctions());

}
