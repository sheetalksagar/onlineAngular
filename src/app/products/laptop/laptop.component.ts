import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  // styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }

  laptopParts=[
    {
      lid:1001,
      lname:"Lenovo",
      lImg:"../../../../assets/img/laptop1.jpg",
    },
    {
      lid:1002,
      lname:"Dell",
      lImg:"../../../../assets/img/laptop2.jpg",
    },
    {
      lid:1003,
      lname:"HP",
      lImg:"../../../../assets/img/laptop3.jpg",
    }
  ]
}
