import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleNgModelComp } from './example.component';
import { HttpClientModule } from '@angular/common/http';
// import { ConvertComponent } from './convert.component';
// import { LengthConvertComponent } from './length.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { ConvertCurrencyComponent } from "./components/convert-currency/convert-currency.component";
import { ConvertLengthComponent } from "./components/convert-length/convert-length.component";

@NgModule({
  declarations: [AppComponent, ConvertCurrencyComponent, ConvertLengthComponent, SimpleNgModelComp],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    // other imports ...
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
