import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public async loadingSpinnerAsync(timeout: number){
    await this.timeout(timeout);
    console.log(">>>> end async loading >>>>")
  }

  private timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  public loadingSpinnerSubscribe(timeout: number): Observable<string> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(">>>> end subscribe loading >>>>");
      }, timeout)
    })
  }
}
