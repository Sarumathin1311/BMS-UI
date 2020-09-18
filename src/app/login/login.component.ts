import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  
constructor(private formBuilder : FormBuilder, private router: Router, private buyerService: ProductService) { }
  userForm : any;
  ngOnInit(): void 
  {
      window.localStorage.removeItem('token');
      this.loginForm = this.formBuilder.group
      ({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
      });
  }

  onSubmit() 
  {
    if (this.loginForm.invalid)
     {
      return;
     }
    const loginPayload = 
    {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.buyerService.login(loginPayload).subscribe(data => 
    {
      if(data.status === 200)
       {
        window.localStorage.setItem('token', data.result.token);
        window.localStorage.setItem('username', data.result.username);
        //alert("login successful");
        this.router.navigateByUrl("/home");
       }
       else 
       {
        this.invalidLogin = true;
        alert(data.message);
       }
    });
  }
}
