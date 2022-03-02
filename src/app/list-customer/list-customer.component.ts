import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listcustomer :any[] = []
  coin :string = "USD";
  names: string = ""

  constructor(private listservice:ListService) { }

  ngOnInit(): void {
    this.listcustomer = this.listservice.getCustomer()
  }
  search(){
    if(this.names!=""){
      this.listcustomer = this.listcustomer.filter(cust=>{
        return cust.name.toLocaleLowerCase().match(this.names.toLocaleLowerCase())
      })
    }else if(this.names==""){
      this.ngOnInit()
    }
    
  }

}
