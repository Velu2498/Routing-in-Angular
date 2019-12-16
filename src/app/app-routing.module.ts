import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ComComponent } from './com/com.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { TableComponent } from './table/table.component';

const varible:Routes=[
  {
      path:"",
      component:DashbordComponent,
  },
  {
      path:"components",
      component:ComComponent
  },
  {
      path:"Utilities",
      component:UtilitiesComponent
  },
  {
      path:"table",
      component:TableComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(varible)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
