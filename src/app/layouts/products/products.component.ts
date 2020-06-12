import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
  <div class="container">
  <div class="section">
    <!--   Icon Section   -->
    <div class="row">
    <!-- Start : row -->

      <!-- Empty the 'row' div -->
<!-- 
      <!-- remove this 'div' for products - ->
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text">
            <i class="material-icons">flash_on</i>
          </h2>
          <h5 class="center">Speeds up development</h5>

          <p class="light">
            We did most of the heavy lifting for you to provide a default
            stylings that incorporate our custom components. Additionally, we
            refined animations and transitions to provide a smoother experience
            for developers.
          </p>
        </div>
      </div>

      <!-- remove this 'div' for products - ->
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">group</i></h2>
          <h5 class="center">User Experience Focused</h5>

          <p class="light">
            By utilizing elements and principles of Material Design, we were
            able to create a framework that incorporates components and
            animations that provide more feedback to users. Additionally, a
            single underlying responsive system across all platforms allow for a
            more unified user experience.
          </p>
        </div>
      </div>

      <!-- remove this 'div' for products - ->
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text">
            <i class="material-icons">settings</i>
          </h2>
          <h5 class="center">Easy to work with</h5>

          <p class="light">
            We have provided detailed documentation as well as specific code
            examples to help new users get started. We are also always open to
            feedback and can answer any questions a user may have about
            Materialize.
          </p>
        </div>
      </div> -->

      <ul>
        <li *ngFor="let mobPart of mobParts">
          <p>
            Mobile Part ID : <b>{{ mobPart.id }}</b>
          </p>
          <div [style.color]="mobPart.prodColor">
            Mobile Part Name :
            <b
              ><i>{{ mobPart.name | uppercase}}</i></b
            >
          </div>
          <div>
            Description : <q>{{ mobPart.description }}</q>
          </div>
      
          <ng-container *ngIf="mobPart.inStock != 0; then stockVal; else outOfStock">
          </ng-container>
      
          <ng-template #stockVal>
            Last <mark>{{ mobPart.inStock }}</mark> Parts Available in stock now...
          </ng-template>
      
          <ng-template #outOfStock>
            Out Of Stock
          </ng-template>
      
          <!-- <div
            [ngStyle]="{
              display: mobPart.canPurch === true ? 'inline-block' : 'none'
            }"
          >
          </div> -->
      
          <!-- ng-container  vs  ng-template - ->
      
          
          <div *ngIf="mobPart.inStock > 0; else outOfStock">
            Last <mark>{{ mobPart.inStock }}</mark> Parts Available in stock now...
          </div>
      
          <!-- #id : templatevarible - ->
          <ng-template #outOfStock>
            Out of stock..!
          </ng-template> -->
      
         <!-- <div *ngIf="mobPart.inStock === 0">
            Out Of Stock Now...
          </div>  -->
        </li>
      </ul>
      
    <!-- End : row -->
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobParts = [
    {
      id: 1001,
      name: 'Screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      prodColor: 'red',
      canPurch: true,
    },
    {
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      prodColor: 'green',
      canPurch: false,
    },
    {
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      prodColor: 'blue',
      canPurch: true,
    },
  ];
}
