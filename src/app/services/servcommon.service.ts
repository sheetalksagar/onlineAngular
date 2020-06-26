import { Injectable } from '@angular/core';

//import { MOBPARTS } from './../layouts/products/mob-part/mock-data';
import { DBMOBPARTS } from './../../app/database/db'

import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServcommonService {

  constructor(private http:Http) {  
    }

  getMobparts(){
    //return MOBPARTS;
    //return DBMOBPARTS;
    return this.http .get('./../../assets/API/mob-parts.json').pipe(map(res => res.json().apiData));
  }
}
