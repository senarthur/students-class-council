import { booleanAttribute, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'number' | 'date'>('text');
  value = input<string | null | undefined>('');
  disabled = input<boolean>(false);
  required = input(false, {
    transform: booleanAttribute
  });
  variant = input(false, {
    transform: booleanAttribute
  })


  valueChange = output<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
