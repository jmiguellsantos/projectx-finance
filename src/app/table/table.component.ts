import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  symbol: string;
  position: number;
  timezone: number;
  variation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, symbol: 'Hydrogen', timezone: 1.0079, variation: 'H'},
  {position: 2, symbol: 'Helium', timezone: 4.0026, variation: 'He'},
  {position: 3, symbol: 'Lithium', timezone: 6.941, variation: 'Li'},
  {position: 4, symbol: 'Beryllium', timezone: 9.0122, variation: 'Be'},
  {position: 5, symbol: 'Boron', timezone: 10.811, variation: 'B'},
  {position: 6, symbol: 'Carbon', timezone: 12.0107, variation: 'C'},
  {position: 7, symbol: 'Nitrogen', timezone: 14.0067, variation: 'N'},
  {position: 8, symbol: 'Oxygen', timezone: 15.9994, variation: 'O'},
  {position: 9, symbol: 'Fluorine', timezone: 18.9984, variation: 'F'},
  {position: 10, symbol: 'Neon', timezone: 20.1797, variation: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'symbol', 'timezone', 'variation'];
  dataSource = ELEMENT_DATA;
}

