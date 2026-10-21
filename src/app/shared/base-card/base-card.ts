import { Component, input } from '@angular/core';

type variant = 'light' | 'dark';

@Component({
  selector: 'app-base-card',
  imports: [],
  templateUrl: './base-card.html',
  styleUrl: './base-card.scss',
})

export class BaseCard {
  padding = input<string>('15px');
  variant = input<variant>('light');
}
