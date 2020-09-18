import{by, element} from 'protractor';

export class Transaction{
    get title(){
        return element(by.css('h3'));
    }
    get fundId(){
        return element(by.id('fundId'));
    }
    get submit(){
        return element(by.className('btn btn-primary'));
    }
}