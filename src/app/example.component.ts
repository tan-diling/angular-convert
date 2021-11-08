import { Component, Input } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  <div>
    <input [(ngModel)]="val" type="number" #ctrl="ngModel" required> 
    * {{rate  }} =

    <input [value]="result" type="number" #ret (change)="setResult(ret.value)">
</div>


    
  `,
})
export class SimpleNgModelComp {
  val: number = 1;
  @Input()
  rate: number = 2.6;

  get result() {
    return this.val * this.rate;
  }

  setResult(val: string) {
    if (val) {
      this.val = Number(val) / this.rate;
    }
  }

  // setValue(val: number) {
  //   this.result = val;
  // }
}
