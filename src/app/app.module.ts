import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';

import {MatToolbarModule} from '@angular/material/toolbar'

import { MatIconModule } from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { GetComponent } from './get/get.component';

import { PutComponent } from './put/put.component';
import { HttpClientModule } from '@angular/common/http';

 

@NgModule({

  declarations: [

    AppComponent,

    NavbarComponent,

 

    GetComponent,

    PutComponent,
   

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    MatMenuModule,

    MatToolbarModule,

    MatIconModule, HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }