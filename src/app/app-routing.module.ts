import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import {HttpClient} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import {RegistrationComponent } from './registration/registration.component';
import { AccountDetailsComponent } from './accountdetails/accountdetails.component';
import { MutualFundAccountComponent } from './mutualfundaccount/mutualfundaccount.component';
import{FundDetailsComponent} from './funddetails/funddetails.component';
import{TransactionComponent} from './transaction/transaction.component';
import{TransactionDetailsComponent} from './transactiondetails/transactiondetails.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path : 'registration',component:RegistrationComponent},
  {path:'home',
    children:[
      {path:'',component:HomeComponent},

        {path : 'bankaccount',
            children:
            [{
            path:'',component:BankAccountComponent
            },
            {
            path:'accountdetails',component:AccountDetailsComponent
            },
        ]},
        {path : 'mutualfund',
            children:
            [{
            path:'',component:MutualFundAccountComponent
            },
            {
            path:'funddetails',component:FundDetailsComponent
            },
        ]}, 

        {path : 'transaction',
            children:
            [{
              path:'',component:TransactionComponent
              },
              {
              path:'transactiondetails/:fundId',component:TransactionDetailsComponent
            },
      ]},
    ]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
