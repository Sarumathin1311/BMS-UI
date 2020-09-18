import {browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {MutualFund} from './mutualfund.po';
import{MutualFundDetails} from './mutualfunddetails.po';

describe('MutualFund page',()=>{
    let page: MutualFund;
    const EC=protractor.ExpectedConditions;
    
   
    beforeEach(()=>{
        page= new MutualFund();
        browser.get('home/mutualfund');
    });

    it('should have correct titles and button text',()=>{
        expect(page.fundId.getText()).toEqual('');
        expect(page.fundName.getText()).toEqual('');
        expect(page.amount.getText()).toEqual('');
        expect(page.panNo.getText()).toEqual('');
        expect(page.accountNo.getText()).toEqual('');
        expect(page.submit.getText()).toEqual('Submit');
        expect(page.viewaccount.getText()).toEqual('ViewAccount');
    });

    it('should verify credentials',()=>{
        page.fundId.sendKeys('80');
        page.fundName.sendKeys('save');
        page.amount.sendKeys('40000.00');
        page.panNo.sendKeys('gg1967');
        page.accountNo.sendKeys('IB20104567');
        page.submit.click();

    });

    it('should redirect to mutual fund details page',()=>{
        const mutualfunddetails=new MutualFundDetails();
        page.fundId.sendKeys('80');
        page.fundName.sendKeys('save');
        page.amount.sendKeys('40000.00');
        page.panNo.sendKeys('gg1967');
        page.accountNo.sendKeys('IB20104567');
        page.submit.click();
        page.viewaccount.click();
        browser.wait(EC.visibilityOf(mutualfunddetails.title));
        expect(mutualfunddetails.title.isPresent()).toBeTruthy();
       

    });
});