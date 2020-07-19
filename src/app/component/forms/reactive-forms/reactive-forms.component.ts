import { Component} from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './../../../validators/username.validators';

@Component({
  selector: 'app-reactive-forms', 
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent{
  formObj = new FormGroup({
    uN: new FormControl('', Validators.required),
    
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.noSpace,
    ]),

    uNameGet : new FormControl('',[Validators.required,Validators.minLength(4)]),
    uPass: new FormControl('', Validators.required),
  });

  get uNameG() {
    return this.formObj.get('uNameGet');
  }

  get uNG() {
    return this.formObj.get('userName');
  }
}
