import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleNgModelComp } from './example.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertComponent } from './convert.component';
import { LengthConvertComponent } from './length.component';

@NgModule({
  declarations: [AppComponent, ConvertComponent, LengthConvertComponent, SimpleNgModelComp],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // other imports ...
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
