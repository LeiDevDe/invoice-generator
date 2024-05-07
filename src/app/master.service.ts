import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Customer } from './customer.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // constructor(private http: HttpClient) { }

  customers = [
    { id: 1, firstName: "bob1", lastName: "Smith1" },
    { id: 2, firstName: "bob2", lastName: "Smith" },
    { id: 3, firstName: "bob3", lastName: "Smith" },
    { id: 4, firstName: "bob4", lastName: "Smith" },
  ]

  products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
  ]
  // getAllCustomers(): Observable<Customer> {
  //   return this.customers;
  //   // return this.http.get<Customer>(environment.api + "customers")
  // }
  getAllCustomers() {
    return this.customers;
    // return this.http.get<Customer>(environment.api + "customers")
  }

  getCustomerById(id: any) {
    return this.customers.find(id)
  }
  getAllProducts() {
    return this.products
  }
  getProductById() {

  }
}
