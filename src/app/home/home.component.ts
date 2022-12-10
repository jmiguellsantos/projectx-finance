import { Component, OnInit } from '@angular/core';
import { DailyPricesService } from 'src/services/px-dailyprices.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  information: any

  constructor(private service: DailyPricesService) { }

  ngOnInit() {
    this.getInfoInflation()
    
  }

  getInfoInflation() {
    this.service.inflationExpect().subscribe(data => data = this.information)
    console.log(this.information);
  }
}
