import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonServicesService } from './person-services.service';

@NgModule({
  declarations: [
    AppComponent,
 
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PersonServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
