import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidators } from './form.validators';
import { EmailService } from '../services/email.service';

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
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(private service: EmailService) { }

  submit() {

    // Идеальный способ, который не работает
    // let body = JSON.stringify(this.form.value);

    // Костыли, но иначе не работает (почему-то)
    let formData = new FormData();
    formData.append("name", this.name.value);
    formData.append("surname", this.surname.value);
    formData.append("birthdate", this.birthdate.value);
    formData.append("emailAddress", this.emailAddress.value);

    this.service.sendEmail(formData)
      .subscribe(response => {
        alert("Сообщение успешно отправлено! Проверьте почтовый ящик!");
      });
  }

  get name() { return this.form.get('name'); }

  get surname() { return this.form.get('surname'); }

  get birthdate() { return this.form.get('birthdate'); }

  get emailAddress() { return this.form.get('emailAddress'); }
}
