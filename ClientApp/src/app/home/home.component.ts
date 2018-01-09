import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  date: number;

  constructor() {
    this.date = new Date().getFullYear()
  }
}
