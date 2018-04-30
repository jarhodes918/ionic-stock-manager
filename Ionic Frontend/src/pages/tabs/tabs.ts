import { Component } from '@angular/core';

import { AboutPage } from '../about/about.component';
import { StocksPage } from '../stocks/stocks.component';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AboutPage;
  tab2Root: any = StocksPage;
  tab3Root: any = InfoPage;

  constructor() {

  }
}
