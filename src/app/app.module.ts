import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ListComponent } from './orders/list/list.component';
import { AddComponent } from './orders/add/add.component';
import {HttpClientModule} from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    ProductsComponent,
    OrdersComponent,
    ListComponent,
    AddComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
