import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GettingStartedService } from './services/getting-started.service';
import { GettingStartedCardComponent } from "./components/getting-started-card/getting-started-card.component";

@Component({
  selector: 'app-getting-started',
  imports: [GettingStartedCardComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {

  protected gettingStarted = inject(GettingStartedService).gettingStarted;

}
