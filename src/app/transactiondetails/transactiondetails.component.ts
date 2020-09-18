import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';



@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  fundId:any;
  username: any;
  accountNo:any;
  buyerInfo : Transaction = new Transaction();
  transaction:Transaction[];
    constructor(private pservice:ProductService,private router: Router,private buyerService : ProductService) { }
   
   
    ngOnInit(): void {
      this.username=window.localStorage.getItem('username');
      this.pservice.viewtransactiondetails().subscribe( transaction => this.transaction=transaction);
      console.log(this.transaction);
  
    }
  
  }