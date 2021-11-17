import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-overview-and-edit-dialog',
  templateUrl: './overview-and-edit-dialog.component.html',
  styleUrls: ['./overview-and-edit-dialog.component.css'],
})
export class OverviewAndEditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OverviewAndEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('this.data: ', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
