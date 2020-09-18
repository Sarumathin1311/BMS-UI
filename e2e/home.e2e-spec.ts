import {browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { BankAccount } from './bankaccount.po';
import {Home} from './home.po';
import{MutualFund} from './mutualfund.po';
import {Transaction} from './transaction.po';


describe('Home page',()=>{
    let page:Home;
    const EC=protractor.ExpectedConditions;

    beforeEach(()=>{
        page=new Home();
        browser.get('/home');
    });

    it('should redirect the user to bank account page',()=>{
        const bankaccount= new BankAccount();
        page.bankaccount.click();
        browser.wait(EC.visibilityOf(bankaccount.title));
        expect(bankaccount.title.isPresent()).toBeTruthy();

    });

    it('should redirect the user to mutual fund page',()=>{
        const mutualfund= new MutualFund();
        page.mutualfund.click();
        browser.wait(EC.visibilityOf(mutualfund.title));
        expect(mutualfund.title.isPresent()).toBeTruthy();
    });

    it('should redirect the user to transaction page',()=>{
        const transaction= new Transaction();
        page.transaction.click();
        browser.wait(EC.visibilityOf(transaction.title));
        expect(transaction.title.isPresent()).toBeTruthy();
    });

});