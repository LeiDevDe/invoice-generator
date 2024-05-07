import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule,
    NgForOf
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

  fb = inject(FormBuilder)
  service = inject(MasterService)

  // customers: Customer[];
  customers: any;
  products: any;

  invoice: any;
  invoiceDetail!: FormArray<any>;
  pageTitle = "Create Invoice"
  ngOnInit(): void {
    this.getCustomers();
    this.getProducts();
  }

  addNewProduct() {
    this.invoiceDetail = this.invoiceForm.get("details") as FormArray;
    this.invoiceDetail.push(this.GeneraterRow())
  }

  get invProducts() {
    return this.invoiceForm.get('details') as FormArray;
  }
  GeneraterRow() {
    return this.fb.group({
      invoiceNo: this.fb.control(''),
      productCode: this.fb.control('', Validators.required),
      productName: this.fb.control(''),
      qty: this.fb.control(1),
      salesPrice: this.fb.control(0),
      total: this.fb.control({ value: 0, disabled: true }),

    })
  }
  invoiceForm = this.fb.group({
    invoiceNo: this.fb.control("", Validators.required),
    customerId: this.fb.control("", Validators.required),
    customerName: this.fb.control(""),
    address: this.fb.control(""),
    remarks: this.fb.control(""),
    total: this.fb.control({ value: 0, disabled: true }),
    tax: this.fb.control({ value: 0, disabled: true }),
    netTotal: this.fb.control({ value: 0, disabled: true }),
    details: this.fb.array([])
  })

  getCustomers() {
    this.customers = this.service.getAllCustomers();
  }
  getProducts() {
    this.products = this.service.getAllProducts();
  }

  saveInvoice(): void {
    console.log(this.invoiceForm.value)
  }

  customerChange(id: any) {
    this.service.getCustomerById(id)
  }

}
