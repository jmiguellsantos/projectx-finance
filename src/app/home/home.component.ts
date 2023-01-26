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
  link: any;

  videoList: Video[] = [
    {
      title: 'Live Bitcoin & Ethereum Signals | ETH | BTC | USDT - Live Streaming',
      link: 'https://www.youtube.com/watch?v=ooje-K0G5t4'
    }
  ]
  currentVideoId: string


  constructor(private service: DailyPricesService) {}

  ngOnInit() {
    this.service.currentGoldPrice().toPromise().then((response) => {
      this.currentPrice = response[0].cena
      this.dateOurPrice = response[0].data
    })
  }

  selectVideo(video: Video) {
    const params = new URL(video.link).searchParams;
    this.currentVideoId = params.get('v');
    console.log('id', this.currentVideoId);
  }
}
