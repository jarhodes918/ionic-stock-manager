import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Stock } from '../shared/models/stock.model';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://ec2-18-219-75-35.us-east-2.compute.amazonaws.com:3000';
    }

  getStocks(user) {
	return this.http.get(this.baseUrl+'/api/stocks/'+user).map(res => res.json());
  }

  countStocks() {
	return this.http.get(this.baseUrl+'/api/stocks/count').map(res => res.json());
  }

  addStock(stock: Stock) {
	return this.http.post(this.baseUrl+'/api/stock',stock).map(res => res.json());
  }

  getStock(stock: Stock) {
	return this.http.get(this.baseUrl+'/api/stock/'+stock._id).map(res => res.json());
  }

  getStockByUser(userstock) {
	return this.http.get(this.baseUrl+'/api/stock/get/'+userstock).map(res => res.json());
  }

  editStock(stock: Stock) {
	return this.http.put(this.baseUrl+'/api/stock/'+stock._id,stock).map(res => res);
  }

  deleteStock(stock: Stock) {
	return this.http.delete(this.baseUrl+'/api/stock/'+stock._id).map(res => res);
  }
}
