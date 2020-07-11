import { TABPARTS } from './tabMock-data';
import { Component, OnInit } from '@angular/core';
import { TabParts } from './tab-parts';


@Component({
  selector: 'app-tab-part',
  templateUrl: './tab-part.component.html',
  styles: [
  ]
})
export class TabPartComponent implements OnInit {

  tabParts : TabParts[] = TABPARTS;
  constructor() { }

  ngOnInit(): void {
  }

}
