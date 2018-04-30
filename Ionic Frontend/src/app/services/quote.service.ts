import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuoteService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://ec2-18-219-75-35.us-east-2.compute.amazonaws.com:3000';
    }
	
    getlatestPrice(ticker) {		
		return this.http.get(this.baseUrl+'/api/latest/price/'+ticker).map(res => res.json());
    }
}
