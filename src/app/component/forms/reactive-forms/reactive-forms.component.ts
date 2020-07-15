import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms', 
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent{
  formObj = new FormGroup({
    userName: new FormControl('', Validators.required),
    uNameGet : new FormControl('',[Validators.required,Validators.minLength(4)]),
    uPass: new FormControl('', Validators.required),
  });

  get uNameG() {
    return this.formObj.get('uNameGet');
  }
}
