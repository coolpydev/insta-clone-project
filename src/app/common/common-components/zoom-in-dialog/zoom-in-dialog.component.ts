import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {instaData} from "../../../services/insta-data-service/insta-data-service.service";

@Component({
  selector: 'app-zoom-in-dialog',
  templateUrl: './zoom-in-dialog.component.html',
  styleUrls: ['./zoom-in-dialog.component.scss']
})
export class ZoomInDialogComponent implements OnInit {

  image!: instaData;
  constructor(public dialogRef: MatDialogRef<ZoomInDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
  }

  ngOnInit(): void {
  }

  onSubmit(data: string) {
    this.dialogRef.close(data);
  }
}
