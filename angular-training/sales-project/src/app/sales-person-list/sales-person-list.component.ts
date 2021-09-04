import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "john.doe@gmail.com", 50000),
    new SalesPerson("Heinrich", "Treadway", "heinrich.treadway@gmail.com", 100000),
    new SalesPerson("Evan", "McCauley", "evan.mcCauley@gmail.com", 20000),
    new SalesPerson("Jason", "Bourn", "jason.bourn@gmail.com", 75000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
