import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { Notfound404Module } from './notfound404/notfound404.module';
import { PicsModule } from './pics/pics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HomeModule,
    Notfound404Module,
    PicsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
