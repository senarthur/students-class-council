import { computed, Directive, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputDirective]',
  host: {
    '[class.invalid-concept]': 'isInvalid()',
    '[class.concept-s]': 'currentValue() === "S"',
    '[class.concept-n]': 'currentValue() === "N"',
    '[class.concept-av]': 'currentValue() === "AV"',
    'maxLength': '2'
  }
})
export class InputDirective {
  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly ngControl = inject(NgControl, { optional: true });
  private readonly validValues = new Set(['S', 'N', 'AV']);

  currentValue = signal('');

  isInvalid = computed(() => {
    const val = this.currentValue();
    return val !== '' && !this.validValues.has(val);
  });

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement;
    const normalizedValue = input.value.toUpperCase().trim();

    input.value = normalizedValue;
    this.currentValue.set(normalizedValue);
    this.ngControl?.control?.setValue(normalizedValue, { emitEvent: false });
  }

}
