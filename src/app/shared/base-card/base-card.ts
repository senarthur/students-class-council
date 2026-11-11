import { booleanAttribute, Component, input } from '@angular/core';

type variant = 'light' | 'dark';

@Component({
  selector: 'app-base-card',
  imports: [],
  templateUrl: './base-card.html',
  styleUrl: './base-card.scss',
  host: {
    '[style.padding]': 'padding()',
    '[style.flex-direction]': 'direction()',
    '[class]': 'variant()'
  }
})

export class BaseCard {
  padding = input<string>('16px');
  variant = input<variant>('light');
  direction = input<'row' | 'column'>('column')
}
