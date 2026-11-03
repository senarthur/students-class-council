import { Component, input, output } from '@angular/core';

export interface ToggleOption {
  label: string;
  value: boolean | string;
}

@Component({
  selector: 'app-toggle-group',
  imports: [],
  templateUrl: './toggle-group.html',
  styleUrl: './toggle-group.scss',
})
export class ToggleGroup {
  label = input<string>('');
  options = input<ToggleOption[]>([
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ]);
  value = input<boolean | string>(false);

  valueChange = output<boolean | string>();

  onSelect(optionValue: boolean | string): void {
    this.valueChange.emit(optionValue);
  }
}
