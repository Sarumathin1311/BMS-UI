import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'; 
import {MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './accountdetails/accountdetails.component';
import { MutualFundAccountComponent } from './mutualfundaccount/mutualfundaccount.component';
import{FundDetailsComponent} from './funddetails/funddetails.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailsComponent } from './transactiondetails/transactiondetails.component';
import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    NavbarComponent,
    RegistrationComponent, 
    HomeComponent,
    LoginComponent,
    BankAccountComponent,
    MutualFundAccountComponent,
    FundDetailsComponent,
    TransactionComponent,
    TransactionDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
