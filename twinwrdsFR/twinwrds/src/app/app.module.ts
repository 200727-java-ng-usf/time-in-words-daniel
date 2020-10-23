import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimehandlerComponent } from './timehandler/timehandler.component';

import { TimeServiceService } from './time-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TimehandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TimeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
