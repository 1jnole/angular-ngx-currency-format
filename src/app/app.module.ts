import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxMaskModule } from 'ngx-mask';
import {NgxCurrencyFormatterModule} from '../../src/lib/ngx-currency-formatter.module';

registerLocaleData(localeDe, 'de-DE')

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxMaskModule.forRoot(), NgxCurrencyFormatterModule.forRoot(null), FormsModule, ReactiveFormsModule],
  exports: [],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: 'ngxCurrencyConfig', useValue: {message: ''}},
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
