import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from './models/venue';

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

  updateVenue(id: number, data: Venue) {
    const url = 'https://coinmap.org/api/v1/venues/:' + `${id}`;

    return this.http.put(url, data);
  }
}
