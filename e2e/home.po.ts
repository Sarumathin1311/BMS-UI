import {by,element} from 'protractor';

export class Home{
    get title(){
        return element(by.css('h1'));
    }

    get bankaccount(){
        return element(by.className('btn btn-primary a'));
    }

    get mutualfund(){
        return element(by.className('btn btn-primary b'));
    }


    get transaction(){
        return element(by.className('btn btn-primary c'));
    }
     
   
    


    
}