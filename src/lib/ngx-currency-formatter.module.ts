import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgxCurrencyConfig} from './ngx-currency';
import {NgxCurrencyFormatterComponent} from './ngx-currency-formatter.component';
import {NgxNumberValidatorDirective} from './ngx-number-validator.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxCurrencyFormatterComponent,
    NgxNumberValidatorDirective
  ],
  exports: [
    NgxCurrencyFormatterComponent,
    NgxNumberValidatorDirective
  ],
  providers: [
    CurrencyPipe
  ]
})
export class NgxCurrencyFormatterModule {
  static forRoot(config: NgxCurrencyConfig = null): ModuleWithProviders {
    return {
      ngModule: NgxCurrencyFormatterModule,
      providers: [{provide: 'ngxCurrencyConfig', useValue: config ? config : {message: 'This is not a valid number'}}]
    };
  }
}
