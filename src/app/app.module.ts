import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";
import { PaisPageModule } from "../pages/pais/pais.module";
import { DestinoPageModule } from "../pages/destino/destino.module";

import { HttpModule } from "@angular/http";
import { PaisProvider } from '../providers/pais/pais';
import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { DbPaisProvider } from '../providers/db-pais/db-pais';
import { AdicionaPaisPageModule } from "../pages/adiciona-pais/adiciona-pais.module";
import { AtualizaPaisPageModule } from "../pages/atualiza-pais/atualiza-pais.module";
import { ExibePaisPageModule } from "../pages/exibe-pais/exibe-pais.module";

@NgModule({ 
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule,
    PaisPageModule,
    HttpModule,
    AdicionaPaisPageModule,
    AtualizaPaisPageModule,
    ExibePaisPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisProvider,
    DatabaseProvider,
    DbPaisProvider,
    SQLite
  ]
})
export class AppModule {}
