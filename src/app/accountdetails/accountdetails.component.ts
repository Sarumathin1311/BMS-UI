import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AccountEntity } from '../account';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountDetailsComponent implements OnInit {
  panNo:string;
  account:AccountEntity[];
  username: string;
 
  constructor(private pservice:ProductService) { }

  ngOnInit(): void
  {
    this.username=window.localStorage.getItem('username');
    this.pservice.viewaccounts(this.username).subscribe( account => this.account=account)
    //console.log(this.account);
  }

}
