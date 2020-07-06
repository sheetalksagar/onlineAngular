import { Routes,RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyTwoComponent } from './lazy-two/lazy-two.component';

const lazyRoutes : Routes = [{
  path:'lazy-child',component : LazyComponent
}]

@NgModule({
  declarations: [LazyComponent, LazyTwoComponent],
  imports: [
    CommonModule,RouterModule.forChild(lazyRoutes)
  ]
})
export class LazyModule { }
