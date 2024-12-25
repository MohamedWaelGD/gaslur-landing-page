import { computed, Injectable, signal } from '@angular/core';
import { GettingStarted } from '../models/getting-started.model';

@Injectable({
  providedIn: 'root',
})
export class GettingStartedService {
  private _gettingStarted = signal<GettingStarted[]>([
    {
      icon: '/images/getting-started/shield-check-24.svg',
      title: 'Connect your wallet',
    },
    {
      icon: '/images/getting-started/archive-24.svg',
      title: 'Posuere urna, sit amet molestie leo',
    },
    {
      icon: '/images/getting-started/file-media-24.svg',
      title: 'Semper pretium libero sed quam ac integer ut',
    },
    {
      icon: '/images/getting-started/rocket-24.svg',
      title: 'Lectus volutpat magna vitae in arcu',
    },
  ]);

  public gettingStarted = computed(() => this._gettingStarted());
}
