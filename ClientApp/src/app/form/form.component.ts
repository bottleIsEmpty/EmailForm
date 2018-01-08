import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidators } from './form.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)
    ]),
    surname: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)
    ]),
    birthdate: new FormControl('', [
      Validators.required,
      FormValidators.min18Years
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
  });

  submit() {
    console.log('asd');
  }

  get name() { return this.form.get('name') }

  get surname() { return this.form.get('surname') }

  get birthdate() { return this.form.get('birthdate') }

  get email() { return this.form.get('email') }
}
