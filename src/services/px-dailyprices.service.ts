import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLServices } from 'src/utils/url-services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DailyPricesService {
  constructor(private http: HttpClient) {}

  inflationExpect() {
    return this.http
      .get<any>(`${URLServices.INFLATION_EXPECTATION}`)
      .pipe(map((data) => data.data));
  }
}
