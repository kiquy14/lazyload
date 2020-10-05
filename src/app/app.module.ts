import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {RatingModule} from "ngx-bootstrap/rating";
import { DebugComponent } from './debug/debug.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
