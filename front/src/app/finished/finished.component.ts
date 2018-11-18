import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  interval: any;

  constructor(private router: Router) { }
  ngOnInit() {

    this.interval = setInterval(() => {
        this.router.navigate(['/']);
        clearInterval(this.interval);
    }, 5000);
  }
}
