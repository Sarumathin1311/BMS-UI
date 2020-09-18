import{by, element} from 'protractor';

export class MutualFund{
    get title(){
        return element(by.css('h3'));
    }
    get fundId(){
        return element(by.id('fundId'));
    }

    get fundName(){
        return element(by.id('fundName'));
    }
    get amount(){
        return element(by.id('amount'));
    }
    get panNo(){
        return element(by.id('panNo'));
    }
    get accountNo(){
        return element(by.id('accountNo'));
    }
    get submit(){
        return element(by.buttonText('Submit'));
    }
    get viewaccount(){
        return element(by.className('btn btn-primary viewaccountbtn'));
    }

    
}