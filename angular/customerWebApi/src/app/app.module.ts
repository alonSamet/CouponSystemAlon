import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyPurchasedCouponsComponent } from './components/my-purchased-coupons/my-purchased-coupons.component';
import { HomeComponent } from './components/home/home.component';
import { AllCouponsComponent } from './components/all-coupons/all-coupons.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerSpaService } from './services/customer-spa.service';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyPurchasedCouponsComponent,
    HomeComponent,
    AllCouponsComponent,
    AboutComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot (
      [
        { 
          path: 'allcoupons',
          component: AllCouponsComponent,
        },
        {
          path: 'mypurchasedcoupons',
          component: MyPurchasedCouponsComponent,
        },  
        {
          path: 'mydetails',
          component: MyDetailsComponent,
        }, 
        {
          path: 'about',
          component: AboutComponent,
        }, 
        {
          path: '',
          component: HomeComponent
        }, 

      ]
    )
  ],
  providers: [CustomerSpaService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
