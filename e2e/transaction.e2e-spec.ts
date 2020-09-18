import {browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {Transaction} from './transaction.po';
import{TransactionDetails} from './transactiondetails.po';

describe('Transaction page',()=>
{
    let page: Transaction;
    const EC=protractor.ExpectedConditions;
    
   
    beforeEach(()=>{
        page= new Transaction();
        browser.get('home/transaction');
    });

    it('should have correct titles and button text',()=>{
        expect(page.fundId.getText()).toEqual('');
        expect(page.submit.getText()).toEqual('Submit');
       
    });

    it('should verify credentials',()=>{
        page.fundId.sendKeys('80');
        page.submit.click();
        
    });

    it('should redirect to mutual fund details page',()=>{
        const transactiondetails=new TransactionDetails();
        page.fundId.sendKeys('80');
        page.submit.click();
        browser.wait(EC.visibilityOf(transactiondetails.title));
        expect(transactiondetails.title.isPresent()).toBeTruthy();

    });
});