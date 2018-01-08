import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   surname: new FormControl('', Validators.required),
  //   birthdate: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // })
}
