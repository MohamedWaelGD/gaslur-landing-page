import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { HotAuctionsComponent } from "./components/hot-auctions/hot-auctions.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { DiscoverComponent } from "./components/discover/discover.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSectionComponent, HotAuctionsComponent, GettingStartedComponent, NavBarComponent, FooterComponent, DiscoverComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {

}
