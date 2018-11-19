import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  number: string;
  validator = /(^[0-9]{9}$)/;

  constructor(private router: Router) { }

  ngOnInit() {}

  call() {
    if (this.isValidNumber()) {
      this.router.navigate(['/ringing/' + this.number]);
    } else {
      // tslint:disable-next-line:no-console
      console.info('Numer niepoprawny');
    }
  }

  isValidNumber() {
    return this.validator.test(this.number);
  }
}
