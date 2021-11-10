import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const sampleResult = {
  base: 'USD',
  last_updated: 1636118100,
  exchange_rates: {
    EUR: 0.868131,
    JPY: 113.707787,
    BGN: 1.69789,
    CZK: 21.942009,
    DKK: 6.45681,
    GBP: 0.742643,
    HUF: 312.093064,
    PLN: 3.996614,
    RON: 4.296901,
    SEK: 8.597361,
    CHF: 0.916659,
    ISK: 130.393263,
    NOK: 8.583905,
    HRK: 6.529907,
    RUB: 71.212258,
    TRY: 9.710739,
    AUD: 1.353763,
    BRL: 5.572793,
    CAD: 1.244987,
    CNY: 6.402986,
    HKD: 7.78453,
    IDR: 14328.474694,
    ILS: 3.11442,
    INR: 74.261221,
    KRW: 1186.517927,
    MXN: 20.501085,
    MYR: 4.159997,
    NZD: 1.410018,
    PHP: 50.307318,
    SGD: 1.352635,
    THB: 33.285007,
    ZAR: 15.195677,
    ARS: 75.269373,
    DZD: 124.445887,
    MAD: 8.83269,
    TWD: 27.466513,
    BTC: 0.000016,
    ETH: 0.000226,
    BNB: 0.001904,
    DOGE: 3.506257,
    XRP: 0.921414,
    BCH: 0.001673,
    LTC: 0.005045,
  },
};

type CurrencyResult = {
  base: string;
  last_updated: number;
  exchange_rates: Record<string, number>;
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) { }

  getRates() {
    const rateUrl =
      'https://exchange-rates.abstractapi.com/v1/live/?api_key=004cf30ef5ac42da8d750ae033a6b9a5&base=USD';
    // const rateUrl = 'http://api.currencylayer.com/live';
    // const rateUrlParam = {
    //   access_key: 'cb1eeec1e8fec1d1f25429c3dc9950ef',
    //   // source: 'GBP',
    //   // currencies: 'USD,AUD,CAD,PLN,MXN',

    //   // format: 1,
    // };
    return this.http.get<CurrencyResult>(rateUrl).pipe(
      map((data) => {
        const { last_updated, base, exchange_rates } = data;
        // exchange_rates[base] = 1;
        console.log(last_updated, exchange_rates);

        let ret = {
          date: new Date(last_updated * 1000).toDateString(),
          rates: [
            { name: base, rate: 1 },
            ...Object.keys(exchange_rates).map((x) => ({
              name: x,
              rate: exchange_rates[x],
            })),
          ],
        };

        return ret;
      })
    );
  }
}
