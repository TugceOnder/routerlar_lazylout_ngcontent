import { NgModule } from '@angular/core';

import {PlaceholdersHomeComponent}from './placeholders-home/placeholders-home.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',component:PlaceholdersHomeComponent // eğer '/placeholders' ise PlaceHoldersHomeComponent çalıştır 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }
