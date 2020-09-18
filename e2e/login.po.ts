import {browser,element,by} from 'protractor';

export class LoginPage{
   

    get username()
    {
        return element(by.id('username'));
    }
    
    get password()
    {
        return element(by.id('pwd'));
    }

    get errorMessage()
    {
        return element(by.className('alert alert-danger'));
    }

    get login()
    {
        return element(by.className('btn btn-primary a'));
    }

    trylogin(username:string,password:string)
    {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.login.click();
    }
}
