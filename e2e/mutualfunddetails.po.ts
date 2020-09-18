import {by,element} from 'protractor';

export class MutualFundDetails
{
    get title(){
        return element (by.css('h3'));
        }
}