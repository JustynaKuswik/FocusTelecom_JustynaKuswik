import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  interval: any;
constructor(private router: Router, private callService: CallService) {}
 ngOnInit() {
 this.interval = setInterval(() => {
 this.callService.checkStatus();
 if(this.callService.isFinished()){
 this.router.navigate(['/finished']);
 clearInterval(this.interval);
 }
 }, 100);
 }


}
