import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  constructor(private http: HttpClient) {}

  getListOfVenues() {
    const limitResults = 20;
    const url =
      'https://coinmap.org/api/v1/venues/' + `?limit=` + `${limitResults}`;

    return this.http.get(url);
  }
}
