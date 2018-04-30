import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about.component';
import { InfoPage } from '../pages/info/info';
import { SettingsPage } from '../pages/settings/settings';
import {DetailsPage} from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';
import { StocksPage } from '../pages/stocks/stocks.component';
import { SharedModule } from '../app/shared/shared.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InfoPage,
    SettingsPage,
    DetailsPage,
    TabsPage,
	StocksPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
	SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InfoPage,
    SettingsPage,
    DetailsPage,
    TabsPage,
	StocksPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
