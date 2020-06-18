import { MobParts } from './mob-parts';
import { MOBPARTS } from './mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styleUrls: ['./mob-part.component.css'],
})
export class MobPartComponent implements OnInit {
  ngOnInit(): void {
    // ngOnInit initialises component
    this.mobParts = MOBPARTS;
    console.log('1 ngOnInit Block...!');
  }

  constructor() {
    // class: Dependancy Injection -> obj init
    // constructor initialises class
    console.log('2 Constructor Block...!');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  mobParts: MobParts[];

  //mobParts : MobParts[] = MOBPARTS; WITHOUT LIFECYCLE HOOK I.E ngOnInit(),ngDestroy()

  calcProd() {
    let tot = 0;

    for (let mobPart of this.mobParts) {
      tot = tot + mobPart.inStock;
    }
    return tot;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
    else alert('Not allowed less than 0!');
  }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
    else alert('Not allowed more than stock!');
  }
}
