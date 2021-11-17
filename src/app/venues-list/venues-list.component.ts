import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { OverviewAndEditDialogComponent } from '../overview-and-edit-dialog/overview-and-edit-dialog.component';

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
  isLoading!: boolean;

  constructor(private venuesService: VenuesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllVenues();
  }

  getAllVenues() {
    this.venuesService.getListOfVenues().subscribe((res) => {
      console.log(res);
      
      this.dataSource = Object.values(res)[0];
      console.log(this.dataSource);
    });
  }

  openDialog(row: any) {
    console.log(row);
    const dialogRef = this.dialog.open(OverviewAndEditDialogComponent, {
      width: '400px',
      data: row,
    });
  }
}
