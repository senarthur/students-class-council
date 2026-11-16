import { computed, DestroyRef, Directive, effect, ElementRef, HostListener, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
export class InputDirective implements OnInit {
  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly ngControl = inject(NgControl, { optional: true });
  private readonly destroyRef = inject(DestroyRef);
  private readonly validValues = new Set(['S', 'N', 'AV']);

  value = input<unknown>('');
  currentValue = signal('');

  isInvalid = computed(() => {
    const val = this.currentValue();
    return val !== '' && !this.validValues.has(val);
  });

  constructor() {
    effect(() => {
      const boundValue = this.value();
      if (!this.ngControl?.control) {
        this.syncValue(boundValue);
      }
    });
  }

  ngOnInit(): void {
    const control = this.ngControl?.control;

    if (control) {
      this.syncValue(control.value);

      control.valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((value) => {
          this.syncValue(value);
        });
    } else {
      // Fallback caso o input não use formControlName/ngModel, mas sim [value]
      this.syncValue(this.el.nativeElement.value);
    }
  }

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement;
    const normalizedValue = input.value.toUpperCase().trim();

    input.value = normalizedValue;
    this.currentValue.set(normalizedValue);
    this.ngControl?.control?.setValue(normalizedValue, { emitEvent: false });
  }

  private syncValue(rawValue: unknown): void {
    const normalized = String(rawValue ?? '').toUpperCase().trim();
    this.el.nativeElement.value = normalized;
    this.currentValue.set(normalized);
  }
}
