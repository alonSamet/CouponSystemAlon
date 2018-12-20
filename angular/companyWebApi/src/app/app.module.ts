import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyCompanyDetailsComponent } from './components/my-company-details/my-company-details.component';
import { MyCouponsComponent } from './components/my-coupons/my-coupons.component';
import { AboutComponent } from './components/about/about.component';
import { CompanySpaService } from './services/company-spa.service';
import { HomeComponent } from './components/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MyCompanyDetailsComponent,
    MyCouponsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot (
      [
        { 
          path: 'mycompanydetails',
          component: MyCompanyDetailsComponent,
        },
        {
          path: 'mycoupons',
          component: MyCouponsComponent,
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
  providers: [CompanySpaService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
