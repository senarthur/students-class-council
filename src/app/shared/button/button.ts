import { booleanAttribute, Component, EventEmitter, input, output } from '@angular/core';
import { ButtonSize, ButtonVariant } from './button.model';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class]': 'variantClass()',
    '[class.disabled]': 'disabled()'
  }
})
export class Button {

  variant = input<ButtonVariant>("primary");
  size = input<ButtonSize>("md");
  disabled = input<boolean>(false, {
    transform: booleanAttribute
  });

  btnClick = output<Event>();

  variantClass(): string {
    return `btn-${this.variant()} btn-${this.size()}`;
  }

  onClick(event: Event): void {
    if (!this.disabled) {
      this.btnClick.emit(event);
    }
  }
}
