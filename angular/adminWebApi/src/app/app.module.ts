import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AdminSpaService } from './services/admin-spa.service';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CustomersComponent,
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
          path: 'companies',
          component: CompaniesComponent,
        },
        {
          path: 'customers',
          component: CustomersComponent,
        },  
        {
          path: 'about',
          component: AboutComponent,
        }, 
        {
          path: '',
          component: HomeComponent,
        }, 

      ]
    )
  ],
  providers: [AdminSpaService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
