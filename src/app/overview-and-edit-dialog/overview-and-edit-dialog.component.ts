import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venue } from '../models/venue';

@Component({
  selector: 'app-overview-and-edit-dialog',
  templateUrl: './overview-and-edit-dialog.component.html',
  styleUrls: ['./overview-and-edit-dialog.component.css'],
})
export class OverviewAndEditDialogComponent implements OnInit {
  disabled: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<OverviewAndEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Venue
  ) {}

  ngOnInit(): void {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onOKClick() {
    this.dialogRef.close(this.data);
  }

  handleChange(event: any) {
    if (event) {
      this.disabled = false;
    }
  }
}
