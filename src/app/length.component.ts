import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import {
  filter,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { FormBuilder, NgModel } from '@angular/forms';

@Component({
  selector: 'app-convert-length',
  template: `
  <div *ngFor="let item of rates; let i = index">
  <div > <span class="title">{{ item.name }}：</span>
    <input
      type="number"
      inputmode="numeric"
      [placeholder]="getPlaceholder(item)"
      (focus)="inputFocus($event, item.rate * baseValue)"
      (blur)="inputBlur($event, item.rate)"
      (change)="changeValue($event, item.rate)"
    />
  </div>
</div>  
  `,
  styles: ['.title {display:inline-block;width:180px};'],
})
export class LengthConvertComponent implements OnInit, OnDestroy {
  @Input() rates: Array<{ name: string; rate: number; formater: string }> = [];

  baseValue = 1.0;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

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
}
