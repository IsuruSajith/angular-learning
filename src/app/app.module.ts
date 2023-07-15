import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './comp-test1/test1.component';
import { CompTest1Component } from './comp-test1/comp-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CompTest1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
