import { booleanAttribute, Component, input, output } from '@angular/core';
import { SelectOption } from './select-option.model';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
  label = input<string>('');
  name = input.required<string>();
  options = input.required<SelectOption[]>();
  placeholder = input<string>('Selecione...');
  value = input<any>('');
  disabled = input(false, {
    transform: booleanAttribute
  });
  required = input(false, {
    transform: booleanAttribute
  });
  variant = input(false, {
    transform: booleanAttribute
  });

  valueChange = output<any>();

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.valueChange.emit(target.value);
  }
}
