import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DiscoverExploreComponent } from "./components/discover-explore/discover-explore.component";
import { HeroCardComponent } from "./components/hero-card/hero-card.component";

@Component({
  selector: 'app-hero-section',
  imports: [DiscoverExploreComponent, HeroCardComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {

}
