import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { Call } from "./call"

@Injectable({
  providedIn: "root",
})
export class CallService {
  private apiUrl: string = "http://localhost:3000"
  private callId: number = null

  isFinished(): boolean {
    return this.callStatus === 'ANSWERED';
    }
    isConnected(): boolean {
    return this.callStatus === 'CONNECTED';
    }


  private callStatus: string = null
 checkStatus() {
 const queryParams = new HttpParams().set('id', String(this.callId));
 this.http.get<Call>(this.apiUrl + '/status', { params: queryParams})
 .subscribe(data => {
 this.callStatus = data.status;
 });
 }


  constructor(private http: HttpClient) {}

  placeCall(number: string) {
    const postData = { first_number: "999999999", second_number: number }
    this.http.post<Call>(this.apiUrl + "/call", postData).subscribe(data => {
      this.callId = data.id
    })
  }
}
