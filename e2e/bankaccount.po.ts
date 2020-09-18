import{browser,by, element} from 'protractor';

export class BankAccount{
    
    get title(){
        return element(by.css('h3'));
    }
    
    get accountNo(){
        return element(by.id('accountNo'));
    }

    get ifsc(){
        return element(by.id('ifsc'));
    }

    get bankName(){
        return element(by.id('bankName'));
    }

    get micrCode(){
        return element(by.id('micrCode'));
    }

    get panNo(){
        return element(by.id('panNo'));
    }

    get submit(){
        return element(by.className('btn btn-primary submitbtn'));
    }
    
    get viewaccount(){
        return element(by.className('btn btn-primary viewaccountbtn'));
    }

 
} 