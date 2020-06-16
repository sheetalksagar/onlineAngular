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
      
      <ul>
        <li *ngFor="let mobPart of mobParts">
       
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
            Mobile Part ID : <b>{{ mobPart.id }}</b>
              </div>
            <div class="card-content">
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
          </div>  --></div>
          </div>
        </div>
     
      
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
