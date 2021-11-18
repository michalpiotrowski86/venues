import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import { Venue } from '../models/venue';
import { MatDialog } from '@angular/material/dialog';
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

  dataSource: Venue[] = [];
  isLoading: boolean = false;

  constructor(private venuesService: VenuesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllVenues();
  }

  getAllVenues() {
    this.isLoading = true;
    this.venuesService.getListOfVenues().subscribe((res) => {
      this.dataSource = Object.values(res)[0];
      this.isLoading = false;
    });
  }

  openDialog(row: any) {
    const dialogRef = this.dialog.open(OverviewAndEditDialogComponent, {
      width: '400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((res) => {});
  }
}
