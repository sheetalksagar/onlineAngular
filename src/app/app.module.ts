import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase-config';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './Modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { LazyModule } from './modules/lazy/lazy.module';
import { MaterialCssComponent } from './layouts/material-css/material-css.component';

import { MobPartComponent } from './products/mob-part/mob-part.component';
import { MobileNavComponent } from './products/mob-part/mobile-nav/mobile-nav.component';
import { MotoComponent } from './products/mob-part/moto/moto.component';
import { SamsungComponent } from './products/mob-part/samsung/samsung.component';

import { LaptopComponent } from './products/laptop/laptop.component';
import { LaptopNavComponent } from './products/laptop/laptop-nav/laptop-nav.component';

import { TabPartComponent } from './products/tab-part/tab-part.component';
import { TabDetailsComponent } from './products/tab-part/tab-details/tab-details.component';
import { TabOffersComponent } from './products/tab-part/tab-offers/tab-offers.component';

import { AllProdComponent } from './layouts/all-prod/all-prod.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { DashboardNavComponent } from './admin/dashboard/dashboard-nav/dashboard-nav.component';
import { SuperadminComponent } from './admin/dashboard/superadmin/superadmin.component';

import { AllMaterialModule } from './modules/all-material.module';
import { AllComponentModule } from './modules/all-component.module';

import { ServcommonService } from './services/servcommon.service';

import { AuthGuard } from './guards/auth.guard';
import { SuperAuthGuard } from './guards/super-auth.guard';

import { SimpleStyleDirective } from './directives/simple-style.directive';
import { HostDirective } from './directives/host.directive';

import { config } from 'process';
import { from } from 'rxjs';
//import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirective,
    PageNotFoundComponent,
    LaptopComponent,
    MobPartComponent,
    MotoComponent,
    SamsungComponent,
    AllProdComponent,
    SuperadminComponent,
    MobileNavComponent,
    LaptopNavComponent,
    TabPartComponent,
    DashboardComponent,
    DashboardNavComponent,
    MaterialCssComponent,
    HostDirective,
    TabDetailsComponent,
    TabOffersComponent
  ],

  imports: [BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    AllMaterialModule,
    AllComponentModule,
    HttpModule,
    LazyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ServcommonService,AuthGuard,SuperAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
