import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SuperAuthService } from './../../../services/super-auth.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  providers: [SuperAuthService],
})
export class SuperadminComponent implements OnInit {

  constructor(private superAuthService: SuperAuthService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  msg;

    checkAdmin(sun: string, sp: string) {
      var output = this.superAuthService.checkSuperAdmin(sun, sp);
      if (output == true) {
        this.router.navigate(['/allProds']);
      } else {
        this.msg = 'Invalid username or password';
      }
    }

}
