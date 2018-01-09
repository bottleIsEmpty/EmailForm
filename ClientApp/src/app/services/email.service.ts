import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http/';

@Injectable()
export class EmailService {
  private url = "/api/send";

  constructor(private http: Http) { }

  sendEmail(formData: FormData) {
    return this.http.post(this.url, formData);
  }
}
