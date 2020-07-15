import { MaterialCssComponent } from './../layouts/material-css/material-css.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

import { HomeComponent } from './../layouts/home/home.component';
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
import { TabDetailsComponent } from './../products/tab-part/tab-details/tab-details.component';
import { TabOffersComponent } from './../products/tab-part/tab-offers/tab-offers.component';

import { AllProdComponent } from './../layouts/all-prod/all-prod.component';

import { PageNotFoundComponent } from './../layouts/page-not-found/page-not-found.component';

import { DashboardComponent } from '../admin/dashboard/dashboard.component'
import { DashboardNavComponent } from '../admin/dashboard/dashboard-nav/dashboard-nav.component';

import { LoginComponent } from '../admin/login/login.component';
import { SuperadminComponent } from '../admin/dashboard/superadmin/superadmin.component';

import { SuperAuthGuard } from '../guards/super-auth.guard';

import { TemplateFormsComponent } from './../component/forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './../component/forms/reactive-forms/reactive-forms.component';


// const routes: Routes = [];
const appsRoutes: Routes = [
  { path: '', component: HomeComponent },
  
  {
    path: 'mobile',
    component: MobileNavComponent,
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
  
  { path: 'laptop',component: LaptopNavComponent,
    children: [
      { path: '', component: LaptopComponent,},
      {path:"lenovo",component:LenovoComponent},
      {path:"dell",component:DellComponent},
      {path:"hp",component:HpComponent}
    ],},

      { path: 'tab', component: TabPartComponent ,
      children:[
        { path:'iPads',component:IpadsComponent },
      ]},

      { path: 'tabDetails', component: TabDetailsComponent, outlet: 'outlet1' },
      { path: 'tabOffers', component: TabOffersComponent, outlet: 'outlet2' },

    { path: 'allProds',component: AllProdComponent,
    children: [
      {path: 'mobile',component: MobPartComponent,
        children: [
          { path: 'moto', component: MotoComponent },
          { path: 'samsung', component: SamsungComponent }
        ]},
        { path: 'laptop',component: LaptopNavComponent,
        children: [
          { path: '', component: LaptopComponent,},
          {path:"lenovo",component:LenovoComponent},
          {path:"dell",component:DellComponent},
          {path:"hp",component:HpComponent}
        ],},
    ]},

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children:[
          { 
            path:'dashboardNav',
            canActivate: [SuperAuthGuard],
            component: DashboardNavComponent
          },
        ]
      },

      {path:"tempForm",component:TemplateFormsComponent},

      {path:"reactForm",component:ReactiveFormsComponent},

      { path:'login',component: LoginComponent },

      { path: 'superLogin', component: SuperadminComponent },
    
      { path : 'lazy',loadChildren:'../modules/lazy/lazy.module#LazyModule'},

      { path:'materialCss',component: MaterialCssComponent },

      { path: '**', component: PageNotFoundComponent },

      // {
      //   path: 'dashboardNav',
      //   canActivate: [AuthGuard],
      //   component: DashboardNavComponent,
      //   children:[
      //     { 
      //       path:'superLogin',
      //       //canActivate: [SuperAuthGuard],
      //       component: SuperadminComponent
      //     },
      //     // { path: 'dashboard', component: DashboardComponent }
      //   ]
      // },

      // { path: 'laptopNav',
    //   component: LaptopNavComponent,
    //   children:[
    //     { path: 'laptop',
    //     component: LaptopComponent,
    //       children:[{ path: 'lenovo',
    //       component: LenovoComponent,},
    //     { path:'dell',
    //       component: DellComponent
    //     },
    //     { path:'hp',
    //       component:HpComponent}]
    //     },
    //     { path: 'lenovo',
    //       component: LenovoComponent,},
    //     { path:'dell',
    //       component: DellComponent
    //     },
    //     { path:'hp',
    //       component:HpComponent}
    //   ],}, 
      
];

@NgModule({
  imports: [RouterModule.forRoot(appsRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
