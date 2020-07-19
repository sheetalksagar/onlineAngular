import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // inputs: [dataFromParent],
  // outputs:[dataFromChild]
})
export class ChildComponent {
  @Input() dataFromParent;
  @Output() dataFromChild = new EventEmitter();

  sendData() {
    this.dataFromChild.emit('Hello from child..!');
  }
}
