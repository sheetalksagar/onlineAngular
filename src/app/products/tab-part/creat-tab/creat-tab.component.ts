// import { CrudTabService } from './../../../services/crud-tab.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-creat-tab',
//   templateUrl: './creat-tab.component.html',
//   styles: [
//   ]
// })
// export class CreatTabComponent implements OnInit {
//   productForm: FormGroup;
//   constructor(public fb: FormBuilder,
//     private router: Router,
//     public crudTabService: CrudTabService) { }

//   ngOnInit(): void {
//     this.productForm = this.fb.group({
//       name: [''],
//       description: [''],
//       price: [''],
//       quantity: [''],    
//     })
//   }

//   submitForm() {
//     //this.crudTabService.create(this.productForm.value).subscribe(res => {
//       console.log('Product created!');
//       this.router.navigateByUrl('/tab-part');
//     }
//   //}

// }
