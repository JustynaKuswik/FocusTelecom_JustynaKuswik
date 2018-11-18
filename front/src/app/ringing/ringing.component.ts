import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ringing',
  templateUrl: './ringing.component.html',
  styleUrls: ['./ringing.component.css']
})
export class RingingComponent implements OnInit {

  interval: any;

  constructor(private router: Router, private route: ActivatedRoute, private callService: CallService) { }

  ngOnInit() {
    let number = null;

    this.route.params.subscribe(params => { number = params.number; });

    this.callService.placeCall(number);

    this.interval = setInterval(() => {
      this.callService.checkStatus();

      if (this.callService.isConnected()) {

        this.router.navigate(['/call']);
        clearInterval(this.interval);
      }
    }, 100);
  }


}
