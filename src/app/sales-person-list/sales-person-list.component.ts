import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000),
    new SalesPerson("David", "Lam", "david.lam@outlook.com.au", 90000),
    new SalesPerson("Mai", "Turong", "mai.turong@luv2code.com", 60000),
    new SalesPerson("Patricia", "Ng Lam", "patricia.nglam@gmail.com", 100000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
