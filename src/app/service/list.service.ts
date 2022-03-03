import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list:any[]=[];
  constructor() { }

setCustomer(form:any){
  this.list = form
}
getCustomer(){
  return this.list
}

}
