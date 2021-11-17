import { Component, AfterViewInit, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css'],
})
export class VenuesListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'created_on',
    'geolocation_degrees',
    'lat',
    'lon',
  ];

  dataSource!: any[];
  count!: number;

  constructor(private venuesService: VenuesService) {}

  ngOnInit(): void {
    this.getAllVenues();
  }

  getAllVenues() {
    this.venuesService.getListOfVenues().subscribe((res) => {
      this.dataSource = Object.values(res)[0];
      console.log(this.dataSource);
    });
  }

  clickedRow(row: any) {
    console.log(row);
  }
}
