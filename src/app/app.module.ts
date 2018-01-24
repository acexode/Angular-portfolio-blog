import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { RoutingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
      ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
