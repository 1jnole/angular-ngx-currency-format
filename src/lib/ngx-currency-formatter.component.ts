import {CurrencyPipe} from '@angular/common';
import {Component, ElementRef, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxCurrency} from './ngx-currency';
export const CURRENCY_FORMATTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxCurrencyFormatterComponent),
  multi: true,
};
@Component({
  selector: '[ngxCurrencyFormatter][formControlName]',
  template: '',
  providers: [CURRENCY_FORMATTER_VALUE_ACCESSOR]
})
export class NgxCurrencyFormatterComponent implements ControlValueAccessor, OnInit {
  @Input()
  code = 'EUR';
  @Input()
  digit = '1.2';
  dot = '.';
  comma = ',';
  private onChange: any;
  private onTouched: any;
  private value: any;
  constructor(private elementRef: ElementRef, private currencyPipe: CurrencyPipe) {
  }
  ngOnInit() {
  }
  writeValue(obj: number): void {
    this.value = obj;
    this.transformValue();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  @HostListener('keyup', ['$event'])
  handleKeyup($event) {
    const value = $event.target.value.replace(this.comma, this.dot);
    this.value = value;
    this.onChange(value);
  }
  @HostListener('focus')
  handleFocus() {
    this.resetValue();
  }
  @HostListener('blur')
  handleBlur() {
    this.transformValue();
  }
  private transformValue() {
    if (NgxCurrency.isValid(this.value) && NgxCurrency.isNumeric(this.value)) {
      this.elementRef.nativeElement.value = this.currencyPipe.transform(this.value, this.code, 'symbol', this.digit);
    } else {
      this.resetValue();
    }
  }
  private resetValue() {
    if (NgxCurrency.isValid(this.value)) {
      this.elementRef.nativeElement.value = this.value;
    }
  }
}