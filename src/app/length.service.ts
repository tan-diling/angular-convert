import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

const lengthRates: {
  exchange_rates: Record<string, number>;
  formaters: Record<string, string>;
} = {
  // last_updated:

  formaters: {
    millimeter: '{} mm',
    metre: '{} m',
    yard: '{} yd',
    inch: '{} in',
  },

  exchange_rates: {
    metre: 1,
    millimeter: 1000,
    yard: 0.0010936,
    inch: 0.0393701,
  },
};

@Injectable({
  providedIn: 'root',
})
export class LengthService {
  constructor(private http: HttpClient) {}

  getRates() {
    return of(lengthRates).pipe(
      map((data) => {
        const { exchange_rates, formaters } = data;

        return {
          date: '',
          rates: Object.keys(exchange_rates).map((x) => ({
            name: x,
            rate: exchange_rates[x],
            formater: formaters[x],
          })),
        };
      })
    );
  }
}
