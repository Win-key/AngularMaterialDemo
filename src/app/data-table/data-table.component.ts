import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  configList : any[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', configList : [ {name : 'name3', id : 'cfid13'}]},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',configList : [ {name : 'name4', id : 'cfid24'} , {name : 'name2', id : 'cfid22'}]},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',configList : [ {name : 'name1', id : 'cfid3'} , {name : 'name2', id : 'cfid32'}, {name : 'name4', id : 'cfid34'}]},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',configList : [ {name : 'name1', id : 'cfid4'} , {name : 'name2', id : 'cfid42'}, {name : 'name3', id : 'cfid43'}]},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', configList : []},
  /*{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];
const CONFIGS : any[] = [
  {name : 'name1', id : 'id1'},
  {name : 'name2', id : 'id2'},
  {name : 'name3', id : 'id3'},
  {name : 'name4', id : 'id4'}
]

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] ;
  data: PeriodicElement[] ;

  constructor() { }
  ngOnInit() {
    CONFIGS.forEach(e => this.displayedColumns.push(e.name));
    this.columnsToDisplay = this.displayedColumns.slice();
    this.data = ELEMENT_DATA;
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  getIndex(configList : any[], column : string) : number{
    return configList.findIndex(e=> e.name==column);
  }
  getCellValue(configList : any[], column : string) : string{
    let index =  configList.findIndex(e=> e.name==column);
    return index < 0 ? '' : configList[index].id;
  }
  
}
