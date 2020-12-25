import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './library-component/dashboard-header/dashboard-header.component';
import { CityItemComponent } from './library-component/city-item/city-item.component';
import { ItemDetailsComponent } from './library-component/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    CityItemComponent,
    ItemDetailsComponent,
    
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
