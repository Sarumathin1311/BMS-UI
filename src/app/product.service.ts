import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ApiResponse } from './api.response';

@Injectable({
  providedIn: 'root'
})
export class ProductService
 {
  private baseUrlAccount:string = 'http://localhost:6579';
  private baseUrlFund:string = 'http://localhost:6580';
  private baseUrlUser:string = 'http://localhost:6581';
  panNo: any;
  username: any;
  fundId: any;

constructor(private http: HttpClient) { }

 
addaccount(AccountEntity:object):Observable<any> 
{ 
  console.log(AccountEntity);
  return this.http.post(`${this.baseUrlAccount}/addAccount`,AccountEntity);
}

addmutualfund(MutualFund:object):Observable<any> 
{ 
  console.log(MutualFund);
  return this.http.post(`${this.baseUrlFund}/addMutualFunds`,MutualFund);
}

viewaccounts(username: string) : Observable<any> 
{
  this.username=window.localStorage.getItem("username");
  console.log(username);
  return this.http.get(`${this.baseUrlAccount}/get/${this.username}`);
}

viewfunddetails(username: string) : Observable<any> 
{
  this.username=window.localStorage.getItem("username");
  console.log(username);
  return this.http.get(`${this.baseUrlFund}/getFundDetails/${this.username}`);
}

viewtransactiondetails() : Observable<any>
 {
  this.fundId=window.localStorage.getItem('fundId');
  this.username=window.localStorage.getItem('username');
  return this.http.get(`${this.baseUrlFund}/getInvestmentDetails/${this.username}/${this.fundId}`);
}

adduser(UserEntity:object):Observable<any>
{ 
  console.log("in sellerservice method");
  console.log(UserEntity);
  return this.http.post(`${this.baseUrlUser}/users/sign-up`,UserEntity);
}

login(loginpayload:object):Observable<ApiResponse>
{  
  console.log("in login service method");
  console.log(loginpayload);
   return this.http.post<ApiResponse>(`${this.baseUrlUser}/user/login`,loginpayload);
}

}


