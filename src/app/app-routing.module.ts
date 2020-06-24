import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobPartComponent } from './layouts/products/mob-part/mob-part.component';
import { LaptopComponent } from './layouts/products/laptop/laptop.component';
import { AllProdComponent } from './layouts/all-prod/all-prod.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { MotoComponent } from './layouts/products/mob-part/moto/moto.component';
import { SamsungComponent } from './layouts/products/mob-part/samsung/samsung.component';

// const routes: Routes = [];
const appRoutes : Routes = [
  { path : "", component : MobPartComponent },
  { path : "mobile", component : MobPartComponent,children:[{path:"moto",component:MotoComponent},{path:"samsung",component:SamsungComponent}]},
  { path : "laptop", component : LaptopComponent },
  { path : "allProds", component : AllProdComponent,children:[{path:"mobile",component:MobPartComponent,children:[{path:"moto",component:MotoComponent},{path:"samsung",component:SamsungComponent}]},{path:"laptop",component:LaptopComponent}] },
  { path : "**", component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
