import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ChildrentComponent } from './childrent/childrent.component';

const routes: Routes = [
  {
    component: ChildrentComponent,
    path: ''
  }
]

@NgModule({
  declarations: [
    ChildrentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChildrenModule { }
