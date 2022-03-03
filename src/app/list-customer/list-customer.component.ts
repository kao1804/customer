import { Component, OnInit,Input } from '@angular/core';
import { ListService } from '../service/list.service';
import { ICustomer } from './share/interfaces';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  private _customer :ICustomer[] = [] ;
  @Input() get customers(): ICustomer[] {
    return this._customer;
}
 set customers( value: ICustomer[]){
   if(value){
     this.listcustomer = this._customer= value;
   }
 }
 returnCustomer(){
   this.listcustomer = this._customer;
 }





  listcustomer :any[] = [];
  coin :string = "USD";
  names: string = "";

  constructor(private listservice:ListService) { }

  ngOnInit(): void {
    
  }




  search(){
    if(this.names!==""){
      this.listcustomer = this.listcustomer.filter(cust=>{
        return cust.name.toLocaleLowerCase().match(this.names.toLocaleLowerCase())
      })
    }else if(this.names==""){
    this.returnCustomer()
    }
    
  }

}
