import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { LengthService } from './length.service';

export type EditorType = 'currency' | 'length';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  editor: EditorType = 'currency';

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  currencyRate:
    | { date: string; rates: Array<{ name: string; rate: number }> }
    | undefined;

  lengthRate:
    | {
        date: string;
        rates: Array<{ name: string; rate: number; formater: string }>;
      }
    | undefined;

  constructor(
    private currencyService: CurrencyService,
    private lengthService: LengthService
  ) {}

  ngOnInit() {
    this.currencyService.getRates().subscribe((data) => {
      this.currencyRate = data;
    });

    this.lengthService.getRates().subscribe((data) => {
      this.lengthRate = data;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
