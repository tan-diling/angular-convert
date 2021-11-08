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
  selector: 'app-convert-item',
  template: `
  <div > 
    <label style="width:100;" >{{ item.name }}：</label>
    <input
      type="number"
      inputmode="numeric"
      [placeholder]="item.rate * baseValue | currency: item.name"
      (focus)="inputFocus($event, item.rate * baseValue)"
      (blur)="inputBlur($event, item.rate)"
      (change)="changeValue($event, item.rate)"
    />
  </div>
  `,
})
export class ConvertComponent implements OnInit, OnDestroy {
  @Input()
  rate: number = 1;
  @Input()
  baseValue = 1.0;

  

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

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
}
