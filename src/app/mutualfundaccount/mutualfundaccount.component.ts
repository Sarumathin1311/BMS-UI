
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { MutualFund } from '../mutualfund';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mutualfundaccount',
  templateUrl: './mutualfundaccount.component.html',
  styleUrls: ['./mutualfundaccount.component.css']
})
export class MutualFundAccountComponent implements OnInit 
{
  constructor(private route:ActivatedRoute,private formBuilder : FormBuilder,private router:Router,private buyerService : ProductService) { }
      userForm : any;
      username:any;
      buyerResponse : any;
      ngOnInit(): void {
      this.userForm = this.formBuilder.group
    ({
      fundId: ['',[Validators.required]],
      fundName: ['',[Validators.required]],
      amount: ['',[Validators.required]],
     panNo: ['',[Validators.required]],
      accountNo: ['',[Validators.required,Validators.maxLength(10)]],
     
    });
  }
    buyerInfo : MutualFund = new MutualFund();
    onSubmit(){
     
    
    if (this.userForm.invalid) 
    {
      return;
    }
    this.buyerInfo.fundId = this.userForm.controls.fundId.value;  
    this.buyerInfo.fundName = this.userForm.controls.fundName.value;  
    this.buyerInfo.amount = this.userForm.controls.amount.value;  
    this.buyerInfo.panNo= this.userForm.controls.panNo.value;  
    this.buyerInfo.accountNo = this.userForm.controls.accountNo.value;  
    this.buyerService.addmutualfund(this.buyerInfo);
    //subscribe(()=>alert("Mutualfund added successfully"));
    
  }
}
