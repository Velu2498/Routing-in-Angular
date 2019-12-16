import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CardbodyComponent } from './cardbody/cardbody.component';
import { TableComponent } from './table/table.component';
import { ComComponent } from './com/com.component';
import { UtilitiesComponent } from './utilities/utilities.component';

//import roughtmodule and component-apps.rought
import {Routes, RouterModule} from "@angular/router";
// import {varible} from "./sidebar/apps.rought";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashbordComponent,
    CardbodyComponent,
    TableComponent,
    ComComponent,
    UtilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(varible)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
