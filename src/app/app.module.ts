import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { LaptopComponent } from './layouts/products/laptop/laptop.component';
import { MobPartComponent } from './layouts/products/mob-part/mob-part.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { AllProdComponent } from './layouts/all-prod/all-prod.component';

import { from } from 'rxjs';

//import {MatCheckboxModule} from '@angular/material/checkbox';

import { AllMaterialModule } from './modules/all-material.module';
import { AllComponentModule } from './modules/all-component.module';

import { ServcommonService } from './services/servcommon.service'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirective,
    LaptopComponent,
    MobPartComponent,
    PageNotFoundComponent,
    AllProdComponent,
  ],

  imports: [BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    AllMaterialModule,
    AllComponentModule,
    HttpModule,
  ],
  providers: [ServcommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
