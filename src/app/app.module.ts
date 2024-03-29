import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MainComponent} from "./main/main.component";
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import {FormsModule} from "@angular/forms";
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchItemComponent } from './container/search-item/search-item.component';



@NgModule({
  declarations: [
    AppComponent,MainComponent, NavigationComponent, ContentComponent, TestComponent, HeaderComponent, TopMenuComponent, MainMenuComponent, ProductListComponent, SearchItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
