import { Video } from './../../utils/model-video';
import { Component, OnInit } from '@angular/core';
import { DailyPricesService } from 'src/services/px-dailyprices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  currentPrice: any;
  dateOurPrice: any;
  exangesRates: any;

  constructor(private service: DailyPricesService) {}

  ngOnInit() {
    this.service.currentGoldPrice().toPromise().then((response) => {
      this.currentPrice = response[0].cena
      this.dateOurPrice = response[0].data
    })
  }
}
