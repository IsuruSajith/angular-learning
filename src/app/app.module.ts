import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MainComponent} from "./main/main.component";
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,MainComponent, NavigationComponent, ContentComponent, TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
