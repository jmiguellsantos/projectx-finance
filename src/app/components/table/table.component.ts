import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DailyPricesService } from 'src/app/services/px-dailyprices.service';

export interface PeriodicElement {
  rates: any;
  timestamp: any;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['rates', 'timestamp'];
  dataSource = new MatTableDataSource<PeriodicElement>([])
  effetiveName: string;
  interval: string;

  constructor(readonly service: DailyPricesService) {}

  ngOnInit() {
    this.service.currentTypeExangesRates().subscribe(response => {
      this.effetiveName = response.name
      this.interval = response.interval
      this.dataSource = new MatTableDataSource<PeriodicElement>(response.data)
    })
  }
}



