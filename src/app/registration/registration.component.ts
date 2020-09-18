import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
import { UserEntity } from '../user';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private router:Router,private buyerService : ProductService) { }
  userForm : any;
  buyerResponse : any;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      LastName: ['',[Validators.required]],
      panNo: ['',[Validators.required]],
      emailId: ['',[Validators.required,Validators.pattern]],
      contactNo: ['',[Validators.required,Validators.maxLength(10),Validators.pattern]],
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]],
     
    });
  }

  buyerInfo : UserEntity = new UserEntity();
  onSubmit(){
    if (this.userForm.invalid) {
      return;
    }
    this.buyerInfo.firstName = this.userForm.controls.firstName.value;  
    this.buyerInfo.LastName = this.userForm.controls.LastName.value;  
    this.buyerInfo.panNo = this.userForm.controls.panNo.value;  
    this.buyerInfo.emailId = this.userForm.controls.emailId.value;  
    this.buyerInfo.contactNo = this.userForm.controls.contactNo.value;  
    this.buyerInfo.password = this.userForm.controls.password.value;  
    this.buyerInfo.confirmPassword = this.userForm.controls.confirmPassword.value;  
    this.buyerService.adduser(this.buyerInfo).subscribe(()=>alert("signed up successfully"));
    this.router.navigate(['login'])  
  }
}