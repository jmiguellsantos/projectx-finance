import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLServices } from 'src/utils/url-services';

@Injectable({
  providedIn: 'root',
})
export class DailyPricesService {
  constructor(private http: HttpClient) {}


  currentGoldPrice() {
    return this.http
      .get<any>(`${URLServices.CURRENT_GOLDPRICE}`)
  }

  currentTypeExangesRates() {
    return this.http
      .get<any>(`${URLServices.CURRENTTYPE_OF_EXANGES_RATES}`)
  }
}
