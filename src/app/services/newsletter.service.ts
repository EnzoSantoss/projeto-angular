import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private endpointUrl = 'http://url-backend';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string) {
    const data = { name, email };

    return this.http.post(this.endpointUrl, data);
  }
}
