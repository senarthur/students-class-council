import { Component, input } from '@angular/core';

type variant = 'light' | 'dark';

@Component({
  selector: 'app-base-card',
  imports: [],
  templateUrl: './base-card.html',
  styleUrl: './base-card.scss',
  host: {
    '[style.padding]': 'padding()',
    '[class]': 'variant()'
  }
})

export class BaseCard {
  padding = input<string>('16px');
  variant = input<variant>('light');
}
