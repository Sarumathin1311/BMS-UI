import {browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {BankAccount} from './bankaccount.po';
import{BankAccountDetails} from './bankaccountdetails.po'

describe('BankAccount page',()=>{
    let page: BankAccount;
    const EC=protractor.ExpectedConditions;
    
   
    beforeEach(()=>{
        page= new BankAccount();
        browser.get('home/bankaccount');
    });

    it('should have correct titles and button text',()=>{
        expect(page.accountNo.getText()).toEqual('');
        expect(page.ifsc.getText()).toEqual('');
        expect(page.bankName.getText()).toEqual('');
        expect(page.micrCode.getText()).toEqual('');
        expect(page.panNo.getText()).toEqual('');
        expect(page.submit.getText()).toEqual('Submit');
        expect(page.viewaccount.getText()).toEqual('View Account');
    });

    it('should verify credentials',()=>{
        page.accountNo.sendKeys('IB20104567');
        page.ifsc.sendKeys('10029');
        page.bankName.sendKeys('IndianBank');
        page.micrCode.sendKeys('10028');
        page.panNo.sendKeys('gg1967');
        page.submit.click();

    });

    it('should redirect to bank account details page',()=>{
        const bankaccountdetails=new BankAccountDetails();
        page.accountNo.sendKeys('IB20104567');
        page.ifsc.sendKeys('10029');
        page.bankName.sendKeys('IndianBank');
        page.micrCode.sendKeys('10028');
        page.panNo.sendKeys('gg1967');
        page.submit.click();
        page.viewaccount.click();
        browser.wait(EC.visibilityOf(bankaccountdetails.title));
        expect(bankaccountdetails.title.isPresent()).toBeTruthy();
        


    });
});