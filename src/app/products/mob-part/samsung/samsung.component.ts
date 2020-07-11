import { MOBPARTS } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import { MobParts } from '../mob-parts';
import { ServcommonService } from 'src/app/services/servcommon.service';
//import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-samsung',
  templateUrl : './samsung.component.html',
  styles: [
  ]
})
export class SamsungComponent implements OnInit {

  mobParts : MobParts[] = MOBPARTS;

  //mobParts: MobParts[];

  constructor() {}
  // mobParts: any[];

  // constructor(private angularFireDatabase: AngularFireDatabase) {
  //   angularFireDatabase
  //     .list('/apiData')
  //     .valueChanges()
  //     .subscribe((mobParts) => {
  //       this.mobParts = mobParts;
  //       console.log(this.mobParts);
  //     });
  // }
  
  ngOnInit(): void {
    //this.servcommonService.getMobparts().subscribe(res => this.mobParts = res);
  }

}
