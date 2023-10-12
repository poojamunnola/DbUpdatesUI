import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { GetComponent } from './get/get.component';

import { PutComponent } from './put/put.component';

import { AppComponent } from './app.component';

 
const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },

 

  { path: 'get', component: GetComponent },

  { path: 'put', component: PutComponent },

];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }

 