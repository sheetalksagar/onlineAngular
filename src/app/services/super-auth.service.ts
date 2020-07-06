import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperAuthService {

  constructor() { }

  checkSuperAdmin(un:string,pw:string){
    if(un == "super" && pw == "super"){
      localStorage.setItem('username','super');
      return true;
      }else{
        return false;
      }
    }
}
