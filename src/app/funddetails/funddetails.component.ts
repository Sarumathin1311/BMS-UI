import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MutualFund } from '../mutualfund';

@Component({
  selector: 'app-funddetails',
  templateUrl: './funddetails.component.html',
  styleUrls: ['./funddetails.component.css']
})
export class FundDetailsComponent implements OnInit 
{
    panNo:string;
    mutualfund:MutualFund[];
    username: string;
   
    constructor(private pservice:ProductService) { }
  
    ngOnInit(): void 
    {
      this.username=window.localStorage.getItem('username');
      this.pservice.viewfunddetails(this.username).subscribe( mutualfund => this.mutualfund=mutualfund);
      //console.log(this.mutualfund);
    }
  
  }