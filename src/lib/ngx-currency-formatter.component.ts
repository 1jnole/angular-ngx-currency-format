import {CurrencyPipe} from '@angular/common';
import {Component, ElementRef, forwardRef, HostListener, Input, OnInit, EventEmitter, Output} from '@angular/core';
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
  code = ' ';
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
    console.log(value);
    this.value = value;
    this.onChange(value);
  }

  @HostListener('blur')
  handleBlur() {
    this.transformValue();
  }

  @HostListener('focus', ['$event.target.value']) onFocus(event) {
    console.log(event);
    console.log('a field was focused!')
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    console.log(e.keyCode);
    if (
        // Allow: Delete, Backspace, Tab, Escape, Enter
        [46, 8, 9, 27, 13,188,110, 190].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
        (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
        (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
        (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
        (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
        (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
        (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
        (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
        (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
        (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  private transformValue() {
    if (NgxCurrency.isValid(this.value) && NgxCurrency.isNumeric(this.value) && NgxCurrency.isValidRegex(this.value)) {
      this.elementRef.nativeElement.value = this.currencyPipe.transform(this.value, this.code, 'symbol', this.digit).trim();
    } else {
      this.resetValue();
    }
  }
  private resetValue() {
    if (NgxCurrency.isValid(this.value)) {
      console.log( this.elementRef.nativeElement.value);
      this.elementRef.nativeElement.value = this.value;
    }
  }
}
