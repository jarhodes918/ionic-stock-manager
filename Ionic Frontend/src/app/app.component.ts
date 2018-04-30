import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {RedditService} from './services/reddit.service';
import {StockService} from './services/stock.service';
import {QuoteService} from './services/quote.service';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [RedditService, StockService, QuoteService]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
