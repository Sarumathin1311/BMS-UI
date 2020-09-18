import { Component, OnInit } from '@angular/core';
import { AccountEntity } from '../account';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankAccountComponent implements OnInit 
{
  

  
  constructor(private formBuilder : FormBuilder,private router:Router,private buyerService : ProductService) { }
      userForm : any;
      buyerResponse : any;
      ngOnInit(): void {
      this.userForm = this.formBuilder.group
    ({
      accountNo: ['',[Validators.required,Validators.maxLength(10)]],
      ifsc: ['',[Validators.required]],
      bankName: ['',[Validators.required]],
      micrCode: ['',[Validators.required]],
      panNo: ['',[Validators.required]],
     
    });
  }
    buyerInfo : AccountEntity = new AccountEntity();
    onSubmit(){
    if (this.userForm.invalid) 
    {
      return;
    }
   this.buyerInfo.accountNo = this.userForm.controls.accountNo.value;  
    this.buyerInfo.ifsc = this.userForm.controls.ifsc.value;  
    this.buyerInfo.bankName = this.userForm.controls.bankName.value;  
    this.buyerInfo.micrCode = this.userForm.controls.micrCode.value;  
    this.buyerInfo.panNo = this.userForm.controls.panNo.value;  
    this.buyerService.addaccount(this.buyerInfo);
    //.subscribe(()=>alert("Account added successfully"));

}}