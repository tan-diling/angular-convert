import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.component.html',
  styleUrls: ["../../styles.css"],
})
export class ConvertCurrencyComponent implements OnInit {
  @Input() rates: Array<{ name: string; rate: number }> = [];
  public fromValue: number = 1;
  public toValue: number = 0;
  public fromUnit: string = 'USD';
  public toUnit: string = 'EUR';
  public lastFromUnit: string = 'USD';
  public lastToUnit: string = 'EUR';
  public history: Array<{ from: number, fromUnit: string, to: number, toUnit: string }> = [];
  public lastFrom: number = 1;

  baseValue = 1.0;

  constructor() { }

  ngOnInit() {
    this.rates;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rates']) {
      this.handleConvert();
    }
  }

  changeValue(ev: Event, rate: number) {
    if (ev.target instanceof HTMLInputElement) {
      // ;

      // if (val != NaN) {
      console.log(ev.target.value, rate);
      const numValue = Number(ev.target.value);
      if (numValue !== NaN) {
        this.baseValue = numValue / rate;
      }
      // }
    }
  }

  inputFocus(ev: Event, val: number) {
    if (ev.target instanceof HTMLInputElement) {
      ev.target.value = String(val);
    }
  }

  inputBlur(ev: Event, rate: number) {
    this.changeValue(ev, rate);
    if (ev.target instanceof HTMLInputElement) {
      ev.target.value = '';
    }
  }

  handleSwap(): void {
    const toUnitNew = this.fromUnit;
    const fromUnitNew = this.toUnit;
    this.fromUnit = fromUnitNew;
    this.toUnit = toUnitNew;
  }

  handleConvert(): void {
    this.lastFrom = this.fromValue;
    this.lastFromUnit = this.fromUnit;
    this.lastToUnit = this.toUnit;
    const fromRate = this.rates.find(item => item.name === this.fromUnit).rate;
    const toRate = this.rates.find(item => item.name === this.toUnit).rate;
    this.toValue = +(this.fromValue / fromRate * toRate).toFixed(2);

    this.history = [...this.history, { from: this.fromValue, fromUnit: this.fromUnit, to: this.toValue, toUnit: this.toUnit }];
  }
}
