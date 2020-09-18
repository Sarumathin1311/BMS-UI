import{browser} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import {LoginPage} from './login.po';
import{Home} from './home.po';

   describe('Login page',()=>{

    let page: LoginPage;
    const EC=protractor.ExpectedConditions;
  
    beforeEach(()=>{
        page= new LoginPage();
        browser.get('/login');

    });
    it('should have correct titles and button text',()=>{
        expect(page.username.getText()).toEqual('');
        expect(page.password.getText()).toEqual('');
        expect(page.login.getText()).toEqual('Login');
    });

    it('should verify credentials',()=>{
         page.username.sendKeys('gg1967');
         page.password.sendKeys('saru');
         page.login.click();

    });

    it('should redirect the user to the home page if they provided correct credentials',()=>{
        const home= new Home();
        page.username.sendKeys('correct');
        page.password.sendKeys('correct');
        page.login.click();
        browser.wait(EC.visibilityOf(home.title));
        expect(home.title.isPresent()).toBeTruthy();
  
    });


});
