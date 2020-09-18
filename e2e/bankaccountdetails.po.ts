import {by,element} from 'protractor';

export class BankAccountDetails{
    get title()
    {
        return element (by.css('h3'));
    }
}