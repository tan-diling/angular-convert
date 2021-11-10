import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-convert-length',
  templateUrl: './convert-length.component.html',
  styleUrls: ["../../styles.css"],
})
export class ConvertLengthComponent implements OnInit, OnDestroy {
  @Input() rates: Array<{ name: string; rate: number; formater: string }> = [];

  public fromValue: number = 1;
  public toValue: number = 0;
  public fromUnit: string = 'metre';
  public toUnit: string = 'yard';
  public lastFromUnit: string = 'metre';
  public lastToUnit: string = 'yard';
  public history: Array<{ from: number, fromUnit: string, to: number, toUnit: string }> = [];
  public lastFrom: number = 1;

  baseValue = 1.0;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rates']) {
      this.handleConvert();
    }
  }

  ngOnDestroy() { }

  getPlaceholder(item: { name: string; rate: number; formater: string }) {
    let curValue = item.rate * this.baseValue;
    return item.formater.replace('{}', curValue.toFixed(3));
  }

  changeValue(ev: Event, rate: number) {
    if (ev.target instanceof HTMLInputElement) {
      console.log(ev.target.value, rate);
      const numValue = Number(ev.target.value);
      if (numValue !== NaN) {
        this.baseValue = numValue / rate;
      }
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

  getFormatter(value: number, unit: string) {
    const item = this.rates.find(item => item.name === unit);
    return item.formater.replace('{}', `${value}`);
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
    this.toValue = +(this.fromValue / fromRate * toRate).toFixed(3);

    this.history = [...this.history, { from: this.fromValue, fromUnit: this.fromUnit, to: this.toValue, toUnit: this.toUnit }];
  }
}
