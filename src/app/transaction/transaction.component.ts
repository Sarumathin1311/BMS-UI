import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
import { Transaction } from '../transaction';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit
{
constructor(private formBuilder : FormBuilder,private router: Router,private buyerService : ProductService) { }
  ngOnInit(): void {}
  fundId:any;
  username: any;
  buyerInfo : Transaction = new Transaction();
  transaction:Transaction[];

  onSubmit(fundId)
  {
  fundId=window.localStorage.setItem("fundId",this.buyerInfo.fundId);
  let resp=this.buyerService.viewtransactiondetails();
  resp.subscribe((data)=>{this.buyerInfo=data;
  console.log('buyerInfo',data)});
  this.router.navigate(['home/transaction/transactiondetails',this.buyerInfo.fundId])  

  }
}
