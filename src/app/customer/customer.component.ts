import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ListService } from '../list.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title : string ="";
  people :any[] =[
    { id: 1, name: 'Khoa', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    { id: 2, name: 'Trang pupi', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    { id: 3, name: 'Hiep', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    { id: 4, name: 'Nghia', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
  ]
  constructor(private listservice:ListService, private dataservice:DataService) { }

  ngOnInit(): void {
    this.title = "Customer"
    this.listservice.setCustomer(this.people);
 
   
  }
 
  

}
