import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

import { MobPartComponent } from './../products/mob-part/mob-part.component';
import { MotoComponent } from './../products/mob-part/moto/moto.component';
import { SamsungComponent } from './../products/mob-part/samsung/samsung.component';
import { MobileNavComponent } from './../products/mob-part/mobile-nav/mobile-nav.component';

import { LaptopComponent } from './../products/laptop/laptop.component';
import { LenovoComponent } from './../products/laptop/lenovo/lenovo.component';
import { DellComponent } from './../products/laptop/dell/dell.component';
import { HpComponent } from './../products/laptop/hp/hp.component';
import { LaptopNavComponent } from './../products/laptop/laptop-nav/laptop-nav.component';

import { TabPartComponent } from './../products/tab-part/tab-part.component';
import { IpadsComponent } from './../products/tab-part/ipad/ipad.component'; 

import { AllProdComponent } from './../layouts/all-prod/all-prod.component';

import { PageNotFoundComponent } from './../layouts/page-not-found/page-not-found.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component'
import { LoginComponent } from '../admin/login/login.component';

// const routes: Routes = [];
const appsRoutes: Routes = [
  { path: '', component: MobPartComponent },
  
  {
    path: 'mobile',
    component: MobPartComponent,
    children: [
      { path: '', component: MobPartComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'samsung',
        component: SamsungComponent,
      },
    ],
  },
  // { path: 'mobile',component: MobPartComponent,
  // children: [
  //   // { path: '', component: MobPartComponent },
  //   { path: 'moto', component: MotoComponent },
  //   { path: 'samsung', component: SamsungComponent },
  //   ],},
  
    { path: 'laptop',
      component: LaptopNavComponent,
      children:[
        { path: '', 
          component: LaptopComponent,
        },
        { path: 'lenovo',
          component: LenovoComponent,},
        { path:'dell',
          component: DellComponent
        },
        { path:'hp',
          component:HpComponent}
      ],},

    // { path : 'laptopNav', component : LaptopNavComponent,
    // children:[
    //   // {path: 'laptop',component: LaptopComponent,},
    //   // {path:'',component:LaptopComponent},
    //   { path:'lenovo',component: LenovoComponent },
    //   { path:'dell',component: DellComponent },
    //   // {path:"hp",component:HpComponent}
    // ]},

  //   { path: 'tab', component: TabPartComponent ,
  // children:[
  //   { path:'iPads',component:IpadsComponent },
  // ]},

  // { path: 'allProds',component: AllProdComponent,
  // children: [
  //   {path: 'mobile',component: MobPartComponent,
  //     children: [
  //       { path: 'moto', component: MotoComponent },
  //       { path: 'samsung', component: SamsungComponent }
  //     ]},
  //   { path: 'laptop', component: LaptopComponent }
  // ]},
  
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },

  { path:'login',component: LoginComponent },

  { path: '**', component: PageNotFoundComponent },


  //{ path: 'mobile',component: MobPartComponent,children: [{path: '',component: MobPartComponent,},{ path: 'moto', component: MotoComponent },{ path: 'samsung', component: SamsungComponent },],},
  //{ path: 'mobile',component: MobileNavComponent,children: [{path: '',component: MobPartComponent,},{path: 'moto',component: MotoComponent,},{path: 'samsung',component: SamsungComponent,}],},
  
  // { path : "laptopNav", component : LaptopComponent,
  // children:[
  //   // {path: '',component: LaptopComponent,},
  //   {path:"lenovo",component:LenovoComponent},
  //   {path:"dell",component:DellComponent},
  //   {path:"hp",component:HpComponent}
  // ]},

  //{ path: 'laptop',component: LaptopNavComponent,children: [{path: '',component: LaptopComponent,},{path:"lenovo",component:LenovoComponent},{path:"dell",component:DellComponent},{path:"hp",component:HpComponent}],},
  
  // { path:'iPads',component:IpadsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appsRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
