import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Call } from './call';

@Injectable({
  providedIn: 'root',
})
export class CallService {


  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000';
  private callId: number = null;


  private callStatus: string = null;

  isFinished(): boolean {
    return this.callStatus === 'ANSWERED';
  }
  isConnected(): boolean {
    return this.callStatus === 'CONNECTED';
  }
  checkStatus() {
    const queryParams = new HttpParams().set('id', String(this.callId));
    this.http.get<Call>(this.apiUrl + '/status', { params: queryParams })
      .subscribe(data => {
        this.callStatus = data.status;
      });
  }

  placeCall(number: string) {
    const postData = { first_number: '999999999', second_number: number };
    this.http.post<Call>(this.apiUrl + '/call', postData).subscribe(data => {
      this.callId = data.id;
    });
  }
}
