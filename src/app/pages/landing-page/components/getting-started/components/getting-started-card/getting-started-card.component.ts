import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GettingStarted } from '../../models/getting-started.model';

@Component({
  selector: 'app-getting-started-card',
  imports: [],
  templateUrl: './getting-started-card.component.html',
  styleUrl: './getting-started-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedCardComponent {

  public gettingStarted = input.required<GettingStarted>();

}
