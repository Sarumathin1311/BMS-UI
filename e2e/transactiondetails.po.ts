import {by,element} from 'protractor';

export class TransactionDetails
{
    get title()
    {
        return element (by.css('h3'));
    }
}