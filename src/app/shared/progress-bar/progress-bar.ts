import { Component, input, numberAttribute } from '@angular/core';
import { Color } from './color.model';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  width = input.required<number>();
  color = input<Color>(Color.PRIMARY_DARK)
}
