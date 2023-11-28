import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-date-range-dialog',
  templateUrl: './date-range-dialog.component.html',
  styleUrls: ['./date-range-dialog.component.css']
})
export class DateRangeDialogComponent {
  startDate=new Date();
  endDate: Date=new Date();

  constructor(public dialogRef: MatDialogRef<DateRangeDialogComponent>){}
  onCancel(): void {
    // Perform any actions needed when the user closes the dialog
    this.dialogRef.close(null);
  }

  onApply(): void {
    // Perform any actions needed when the user applies the date range
    // For example, you can pass the selected date range back to the calling component
    const dateRange = { startDate: this.startDate, endDate: this.endDate };
    this.dialogRef.close(dateRange);
  }
}
