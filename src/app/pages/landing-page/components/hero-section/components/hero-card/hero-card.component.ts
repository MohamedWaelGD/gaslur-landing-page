import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent {

}
