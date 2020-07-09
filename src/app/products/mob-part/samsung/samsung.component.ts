import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-samsung',
  templateUrl : './samsung.component.html',
  styles: [
  ]
})
export class SamsungComponent implements OnInit {
  mobParts: any[];

  constructor(private aFDatabase: AngularFireDatabase) {
    aFDatabase
      .list('/apiData')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
      });
  }

  ngOnInit(): void {
  }

}
