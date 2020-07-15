import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TabParts } from './../products/tab-part/tab-parts';

@Injectable({
  providedIn: 'root'
})
export class CrudTabService {
    Tabitems = [];

  constructor() { }

  addToCart(product) {
    this.Tabitems.push(product);
  }

  getItems() {
    return this.Tabitems;
  }

  clearCart() {
    this.Tabitems = [];
    return this.Tabitems;
  }
//   getAll(){
//   console.log('In getAll');
//   //return this.httpClient .get('./../../assets/API/mob-parts.json').pipe(map(res => res.json().apiData));
//   }
//   create(product): Observable<TabParts> {
//     return this.httpClient.post<TabParts>('/tab-parts/', JSON.stringify(product))
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }  
//   getById(id): Observable<TabParts> {
//     return this.httpClient.get<TabParts>( '/tab-parts/' + id)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

//   getAll(): Observable<TabParts[]> {
//     return this.httpClient.get<TabParts[]>('/tab-parts/')
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

//   update(id, product): Observable<TabParts> {
//     return this.httpClient.put<TabParts>( '/tab-parts/' + id, JSON.stringify(product), this.httpOptions)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }
//   errorHandler(error) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//  }
}
