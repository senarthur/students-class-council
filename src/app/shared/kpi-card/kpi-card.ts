import { Component, input } from '@angular/core';
import { BaseCard } from '../base-card/base-card';
import { IKpiCard } from './ikpi-card';

@Component({
  selector: 'app-kpi-card',
  imports: [
    BaseCard,
  ],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {

  data = input.required<IKpiCard>();
}
