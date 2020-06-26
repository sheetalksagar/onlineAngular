import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobPartComponent } from './layouts/products/mob-part/mob-part.component';
import { LaptopComponent } from './layouts/products/laptop/laptop.component';
import { AllProdComponent } from './layouts/all-prod/all-prod.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { MotoComponent } from './layouts/products/mob-part/moto/moto.component';
import { SamsungComponent } from './layouts/products/mob-part/samsung/samsung.component';
import { MobileNavComponent } from './layouts/products/mob-part/mobile-nav/mobile-nav.component';
import { LenovoComponent } from './layouts/products/laptop/lenovo/lenovo.component';
import { DellComponent } from './layouts/products/laptop/dell/dell.component';
import { HpComponent } from './layouts/products/laptop/hp/hp.component';
import { LaptopNavComponent } from './layouts/products/laptop/laptop-nav/laptop-nav.component';

import { TabPartComponent } from './layouts/products/tab-part/tab-part.component';
import { IpadsComponent } from './layouts/products/tab-part/ipad/ipad.component'; 

// const routes: Routes = [];
const appRoutes: Routes = [
  { path: '', component: MobPartComponent },
  
  { path: 'mobile',component: MobPartComponent,
  children: [
    { path: 'moto', component: MotoComponent },
    { path: 'samsung', component: SamsungComponent },
    ],},
  
  //{ path: 'mobile',component: MobPartComponent,children: [{path: '',component: MobPartComponent,},{ path: 'moto', component: MotoComponent },{ path: 'samsung', component: SamsungComponent },],},
  //{ path: 'mobile',component: MobileNavComponent,children: [{path: '',component: MobPartComponent,},{path: 'moto',component: MotoComponent,},{path: 'samsung',component: SamsungComponent,}],},
  
  { path: 'laptop', component: LaptopComponent,
    children:[{path: 'lenovo',component: LenovoComponent,},
    // {path:"dell",component:DellComponent}
    ],},
  
    { path : 'laptopNav', component : LaptopNavComponent,
    children:[
      // {path: 'laptop',component: LaptopComponent,},
      // {path:'',component:LaptopComponent},
      { path:'lenovo',component: LenovoComponent },
      { path:'dell',component: DellComponent },
      // {path:"hp",component:HpComponent}
    ]},

  // { path : "laptopNav", component : LaptopComponent,
  // children:[
  //   // {path: '',component: LaptopComponent,},
  //   {path:"lenovo",component:LenovoComponent},
  //   {path:"dell",component:DellComponent},
  //   {path:"hp",component:HpComponent}
  // ]},

  //{ path: 'laptop',component: LaptopNavComponent,children: [{path: '',component: LaptopComponent,},{path:"lenovo",component:LenovoComponent},{path:"dell",component:DellComponent},{path:"hp",component:HpComponent}],},
  
  { path: 'tab', component: TabPartComponent ,
  children:[
    { path:'ipad',component:IpadsComponent },
  ]},

  { path: 'allProds',component: AllProdComponent,children: [{path: 'mobile',component: MobPartComponent,children: [{ path: 'moto', component: MotoComponent },{ path: 'samsung', component: SamsungComponent }]},{ path: 'laptop', component: LaptopComponent }]},
  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
