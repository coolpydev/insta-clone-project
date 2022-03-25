import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstaCloneComponent} from "./insta-clone.component";

const routes: Routes = [
  {
    path : '',
    component : InstaCloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstaCloneRoutingModule { }
