import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
})
export class MotoComponent implements OnInit {
  mobParts: any[];

  constructor(private angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/apiData')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
      });
  }

  ngOnInit(): void {}
}
