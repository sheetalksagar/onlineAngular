import { MobParts } from './mob-parts';
import { MOBPARTS } from './mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styleUrls: ['./mob-part.component.css']
})
export class MobPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobParts : MobParts =MOBPARTS

  // calcProd() {
  //   let tot = 0;

  //   for (let mobPart of MobParts) {
  //     tot = tot + mobPart.inStock;
  //   }
  //   return tot;
  // }
}
