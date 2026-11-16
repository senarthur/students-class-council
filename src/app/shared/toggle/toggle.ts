import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle {
  checked = model<boolean>(false);

  label = input<string>('');
  helpText = input<string>('');
  disabled = input<boolean>(false);

  toggle(): void {
    if (this.disabled()) return;
    this.checked.update(prev => !prev);
  }
}
