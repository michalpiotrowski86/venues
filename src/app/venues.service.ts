import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  constructor(private http: HttpClient) {}

  getListOfVenues() {
    const url = 'https://coinmap.org/api/v1/venues/';

    return this.http.get(url);
  }
}
